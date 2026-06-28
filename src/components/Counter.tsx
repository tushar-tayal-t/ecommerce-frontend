"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <p className="text-lg">Count: {count}</p>
      <Button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Increment
      </Button>
    </div>
  );
}