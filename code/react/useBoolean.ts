/**
* Implement a useBoolean hook that manages a boolean state, with additional convenience utility methods.

* Arguments
initialValue: boolean: Initial value of the boolean state. If not provided, it should default to false.

* Returns
The useBoolean hook returns an object with the following properties.

value: boolean: The current boolean state
setTrue: () => void: A function to set the boolean state to true
setFalse: () => void: A function to set the boolean state to false
 */

import { useState } from "react";

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  };
}
