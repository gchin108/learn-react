"use client";

import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(null);
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("EUR");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        if (amount>0){
             setIsLoading(true);
        }     
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${convertFrom}&to=${convertTo}`,
            { signal: controller.signal }
        );
        if (!res.ok) throw new Error("problem while fetching data");
        const data = await res.json();
        setResult(data.rates[convertTo]);
        setIsLoading(false)
      } catch (err) {
        console.log(err);
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    };
    if (convertFrom===convertTo) return setResult(amount);
    getData();
    return function () {
      controller.abort();
    };
  }, [amount, convertFrom, convertTo]);

  return (
    <>
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          className="text-black pl-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          autoFocus
        />
        <select
          className="text-black"
          value={convertFrom}
          onChange={(e) => setConvertFrom(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="MYR">MYR</option>
          <option value="INR">INR</option>
        </select>
        <select
          className="text-black"
          value={convertTo}
          onChange={(e) => setConvertTo(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="MYR">MYR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <p>
          {amount > 0 && result} {convertTo}
        </p>
      )}
    </>
  );
}
const Loader = ()=>{
    return(<p>Loading</p>)
}