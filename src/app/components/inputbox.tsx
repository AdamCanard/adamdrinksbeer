import { useContext } from "react";

export default function InputBox(props: {
  title: string;
  state: {};
  setState: Function;
}) {
  console.log(props.state);
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setState((values: any) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <label className="flex justify-between">
        Enter {props.title}:
        <input
          type="text"
          name={props.title}
          value={props.state.title || ""}
          onChange={handleChange}
        />
      </label>
      ;
    </>
  );
}
