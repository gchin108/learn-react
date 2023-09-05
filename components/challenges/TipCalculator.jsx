"use client";
import React from "react";
import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [otherTip, setOtherTip] = useState(0);

  const [isOpen, setIsOpen] = useState(true)

  const totalTip = ((tip + otherTip) / 100) * bill;
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setOtherTip(0);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <button
        className="absolute top-0 right-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        x
      </button>
      {isOpen &&<>
        <Bill text="How much is the bill?" bill={bill} onSetBill={setBill} />
        <SelectTip
          text="Do you like the Service?"
          tip={tip}
          onSetTip={setTip}
        />
        <SelectTip
          text="Does your friend like the Service?"
          tip={otherTip}
          onSetTip={setOtherTip}
        />
        {bill > 0 && (
          <>
            <ShowBill
              bill={bill}
              totalTip={totalTip}
              tip={tip}
              otherTip={otherTip}
            />
            <Button onReset={handleReset} />
          </>
        )}
      </>}
    </div>
  );
};
export default TipCalculator;

const Bill = ({ text, bill, onSetBill }) => {
  return (
    <div className="flex gap-4">
      <p>{text}</p>
      <input
        type="Number"
        value={bill}
        className="text-black bg-[#ffebb3] rounded-full pl-4 w-[100px]"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

const SelectTip = ({ text, onSetTip, tip }) => (
  <div className="flex gap-4">
    <p>{text}</p>
    <select
      className="text-black bg-[#ffebb3] rounded-full"
      onChange={(e) => onSetTip(Number(e.target.value))}
      value={tip}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="10">Good (10%)</option>
      <option value="20">Great! (20%)</option>
      <option value="30">Excellent! (30%)</option>
    </select>
  </div>
);

const ShowBill = ({ bill, totalTip, tip, otherTip }) => (
  <h3 className="text-xl font-montserrat font-semibold">{`You pay $${bill + totalTip} ($${bill} + $${Math.round(totalTip)} in tips)`}</h3>
);

const Button = ({ onReset }) => (
  <button className="button" onClick={onReset}>
    Reset
  </button>
);