export default function ListElement(props: { data: any; type: string }) {
  const drinkBeer = () => {};

  console.log(props.data);
  return (
    <>
      {props.type == "Drank" ? (
        <div className="flex w-full h-12 border-2 justify-between items-center p-2">
          <div>{props.data.Name}</div>
          <div>{props.data.Brewery}</div>
          <div>{props.data.Rating}</div>
        </div>
      ) : (
        <div className="flex w-full h-12 border-2 justify-between items-center p-2">
          <div>{props.data.Beer}</div>
          <div>{props.data.Brewery}</div>
          <div>{props.data.Requested_by}</div>
          <div>
            <button onClick={drinkBeer} type="button" className="">
              Drink me!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
