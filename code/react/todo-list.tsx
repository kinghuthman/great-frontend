/**
 * You're given some existing HTML for a Todo List app. Add the following functionality to the app:

Add new tasks on clicking the "Submit" button.
The <input> field should be cleared upon successful addition.
Remove tasks from the Todo List upon clicking the "Delete" button.
Notes
The focus of this question is on functionality, not the styling. There's no need to write any custom CSS.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc), but the result should remain the same visually.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).
 */

import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");
  const updateList = () => {
    const keyEntry = (list?.length || 0) + 1;
    setList((prevList) => [
      ...prevList,
      { id: keyEntry, ourInputText: inputText },
    ]);
    setInputText("");
  };

  const deleteMe = (id) => {
    setList((prevList) => prevList.filter((entry) => entry.id != id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <div>
          <button onClick={updateList}>Submit</button>
        </div>
      </div>
      <ul>
        {list?.map((listEntry) => (
          <li key={listEntry.id}>
            <span>{listEntry?.ourInputText}</span>
            <button onClick={() => deleteMe(listEntry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
