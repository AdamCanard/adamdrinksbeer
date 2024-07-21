"use client";
import { useState } from "react";

export default function DrankForm() {
  const [inputs, setInputs] = useState({});

  const newDrank = async (formData: FormData) => {
    try {
      const response = await fetch("/api/newdrank/", {
        method: "POST",
        body: formData,
      });
      console.log(await response.json());
    } catch (err: any) {
      return new Response(
        JSON.stringify({ error: err.message || err.toString() }),
        {
          status: 500,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("brewery", inputs.brewery);
    formData.append("rating", inputs.rating);
    newDrank(formData);
  };
  return (
    <div>
      <h1>New Drank:</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
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
