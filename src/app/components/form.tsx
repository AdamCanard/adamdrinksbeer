import { useState, useContext, createContext } from "react";
import InputBox from "./inputbox";

export const inputContext = createContext({});

interface input {
  name: string;
}

export default function Form(props: {
  Title: String;
  API: string;
  Fields: string[];
}) {
  //[name,brewery,rating]
  const [inputs, setInputs] = useState({});

  const postData = async (formData: FormData) => {
    try {
      const response = await fetch(props.API, {
        method: "POST",
        body: formData,
      });
      console.log(await response.json());
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || err.toString() }),
        {
          status: 500,
          headers: {},
        }
      );
    }
  };

  // const reset = () => {
  //   for (let obj in inputs) {
  //     setInputs((values) => ({ ...values, [obj]: "" }));
  //   }
  // };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs, props.Fields);

    const formData = new FormData();
    props.Fields.map((title: string) => {
      formData.append(title, inputs.title);
    });
    console.log(formData);
    postData(formData);
    // reset();
  };

  return (
    <div>
      <h1>New Drank:</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {props.Fields.map((title: string, index: number) => {
          console.log(inputs);
          return (
            <InputBox
              title={title}
              state={inputs}
              setState={setInputs}
              key={index}
            />
          );
        })}
        <label className="flex justify-between">
          Enter beer:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label className="flex justify-between">
          Enter brewery:
          <input
            type="text"
            name="brewery"
            value={inputs.brewery || ""}
            onChange={handleChange}
          />
        </label>
        <label className="flex justify-between">
          Enter rating:
          <input
            type="number"
            name="rating"
            value={inputs.rating || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
