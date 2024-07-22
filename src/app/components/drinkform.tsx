"use client";
import { useState } from "react";

export default function DrinkForm() {
  const [inputs, setInputs] = useState({});

  const newDrink = async (formData: FormData) => {
    try {
      const response = await fetch("/api/newdrink/", {
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

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const reset = () => {
    for (let obj in inputs) {
      setInputs((values) => ({ ...values, [obj]: "" }));
    }
  };

  // const refresh = () => {};

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("beer", inputs.beer);
    formData.append("brewery", inputs.brewery);
    formData.append("requestedBy", inputs.requestedBy);
    newDrink(formData);
    reset();
    // refresh();
  };
  return (
    <div>
      <button onClick={reset}> click me</button>
      <h1>New Drink:</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className="flex justify-between">
          Enter beer:
          <input
            type="text"
            name="beer"
            value={inputs.beer || ""}
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
          Enter name:
          <input
            type="text"
            name="requestedBy"
            value={inputs.requestedBy || ""}
            onChange={handleChange}
          />
        </label>

        <input type="button" value="Submit" />
      </form>
    </div>
  );
}
