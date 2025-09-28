/**

Implement a useCounter hook that manages a counter state, with some additional convenience utility methods.

Arguments
initialValue: number: Initial value of the counter state. If not provided, it should default to 0.

Returns
The useCounter hook returns an object with the following properties:

count: number: The current counter value
increment: () => void: A function to increment the counter value
decrement: () => void: A function to decrement the counter value
reset: () => void: A function to reset the counter value to initialValue, or 0 if not provided
setCount: (value: number) => void: A function to set the counter value to value, it has the same signature as setState
 */

import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount((x) => x + 1),
    decrement: () => setCount((x) => x - 1),
    reset: () => setCount(initialValue),
    setCount,
  };
}
