import InputBox from "./inputbox";

export default function Form(props: {
  Title: String;
  API: string;
  Fields: string[];
}) {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData.entries()));
    postData(formData);
    // reset();
  };

  return (
    <div>
      <h1>New {props.Title}:</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {props.Fields.map((title: string, index: number) => {
          return <InputBox title={title} key={index} />;
        })}

        <input type="submit" />
      </form>
    </div>
  );
}
