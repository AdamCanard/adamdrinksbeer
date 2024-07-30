import { useState } from "react";

export default function InputBox(props: { title: string }) {
  const [input, setInput] = useState("");

  return (
    <>
      <label className="flex justify-between">
        Enter {props.title}:
        <input
          type="text"
          name={props.title}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </>
  );
}
