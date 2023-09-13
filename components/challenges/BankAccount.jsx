"use client"
import { useReducer} from "react";
/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/


const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  onLoan: false,
};

function reducer(state=initialState, action){
    switch (action.type) {
      case "openAccount":
        return { ...state, balance: 400, isActive: true };
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - action.payload };
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

export default function BankAccount() {
    const [{ balance, loan, isActive, onLoan }, dispatch] = useReducer(
      reducer,
      initialState
    );
    const enoughMoney = balance > 0
    const cleanSlate = balance === 0 && !onLoan 

    const DEPOSIT = 150;
    const WITHDRAW = 50;
    const LOAN_AMOUNT = 5000;
  return (
    <div className="text-center flex flex-col gap-4">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

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
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "deposit", payload: DEPOSIT });
              }}
              disabled={false}
            >
              Deposit 150
            </button>
          </p>
          <p>
            <button
              className={`btn ${
                !enoughMoney && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "withdraw", payload:WITHDRAW });
              }}
              disabled={!enoughMoney}
            >
              Withdraw 50
            </button>
          </p>
          <p>
            <button
              className={`btn ${
                onLoan && "cursor-not-allowed hover:text-coral-red"
              }`}
              onClick={() => {
                dispatch({ type: "borrow", payload:LOAN_AMOUNT });
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
