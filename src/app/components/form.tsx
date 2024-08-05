import InputBox from "./inputbox";

export default function Form(props: { Title: String; Fields: string[] }) {
  //add new Beer from formData
  const postData = async (formData: FormData) => {
    try {
      const response = await fetch("/api/newbeer/", {
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

  //On submit grab data from form, add the appropriate Drank value based on Form Title
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    if (props.Title == "Drank") {
      formData.append("Drank", true);
    } else {
      formData.append("Drank", false);
    }
    postData(formData);
    // reset();
  };

  return (
    <div className="bg-red-500 border-2 border-black">
      <h1>New {props.Title}:</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {props.Fields.map((title: string, index: number) => {
          // For every string in fields, generate an InputBox for the value
          return <InputBox title={title} key={index} />;
        })}

        <input type="submit" />
      </form>
    </div>
  );
}
