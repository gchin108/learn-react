"use client";
import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  onLoan: false,
  deposit: "",
  withdraw: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 400, isActive: true };
    case "addMoney":
      return {
        ...state,
        deposit: action.payload,
      };
    case "takeMoney":
      return {
        ...state,
        withdraw: action.payload,
      };
    case "deposit":
      return { ...state, balance: state.balance + state.deposit, deposit:"" };
    case "withdraw":
      return { ...state, balance: state.balance - state.withdraw, withdraw:"" };
    case "borrow":
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
        onLoan: true,
      };
    case "payLoan":
      return {
        ...initialState,
        balance: state.balance - state.loan,
        isActive: true,
      };
    case "closeAccount":
      return {
        ...initialState,
      };
  }
}

export default function BankAccountV2() {
  const [{ balance, loan, isActive, onLoan, deposit, withdraw }, dispatch] =
    useReducer(reducer, initialState);
  const enoughMoney = balance >= withdraw;
  const cleanSlate = balance === 0 && !onLoan;


  const LOAN_AMOUNT = 5000;
  return (
    <div className="text-center flex flex-col gap-4">
      <h1>useReducer Bank Account</h1>
      <p>Balance: ${balance}</p>
      <p>Loan: ${loan}</p>

      <p>
        <button
          className={`btn ${isActive && "hidden"}`}
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      {isActive && (
        <>
          <p>
            <input
              className="inp w-30 "
              type="number"
              value={deposit}
              onChange={(e) =>
                dispatch({ type: "addMoney", payload: Number(e.target.value) })
              }
            />
            <button
              className="btn ml-2"
              onClick={() => {
                dispatch({ type: "deposit" });
              }}
            >
              Deposit
            </button>
          </p>
          <p>
            <input
              className="inp w-30"
              type="number"
              value={withdraw}
              onChange={(e) =>
                dispatch({ type: "takeMoney", payload: Number(e.target.value) })
              }
            />
            <button
              className={`btn ml-2 ${
                !enoughMoney && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "withdraw" });
              }}
              disabled={!enoughMoney}
            >
              Withdraw
            </button>
          </p>
          <p>
            <button
              className={`btn ${
                onLoan && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "borrow", payload: LOAN_AMOUNT });
              }}
              disabled={onLoan}
            >
              Request a loan of 5000
            </button>
          </p>
          <p>
            <button
              className={`btn ${
                !onLoan && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "payLoan" });
              }}
              disabled={!onLoan}
            >
              Pay loan
            </button>
          </p>

          <p>
            <button
              className={`btn ${
                !cleanSlate && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "closeAccount" });
              }}
              disabled={!cleanSlate}
            >
              Close account
            </button>
          </p>
        </>
      )}

    </div>
  );
}
