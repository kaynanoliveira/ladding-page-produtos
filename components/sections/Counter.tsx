"use client";
import Image from "next/image";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }
  return (
    <div className="flex items-center justify-center bg-slate-100 w-48 py-4 px-10 rounded-lg gap-12">
      <button className="shrink-0 cursor-pointer" onClick={handleDecrement}>
        <Image
          src="/images/icon-minus.svg"
          alt="Minus"
          width={13}
          height={13}
        />
      </button>
      <span className="font-bold text-lg">{count}</span>
      <button className="shrink-0 cursor-pointer" onClick={handleIncrement}>
        <Image src="/images/icon-plus.svg" alt="Plus" width={13} height={13} />
      </button>
    </div>
  );
}
