import { useRouter } from "next/navigation";

export default function ListElement(props: { data: any; type: string }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/beer/" + props.data.collectionName + "/" + props.data.id);
  };
  return (
    <>
      {props.type == "Drank" ? (
        <div
          className="flex w-full h-12 border-2 justify-between items-center p-2 hover:cursor-pointer"
          onClick={handleClick}
        >
          <div>{props.data.Beer}</div>
          <div>{props.data.Brewery}</div>
          <div>{props.data.Rating}</div>
        </div>
      ) : (
        <div
          className="flex w-full h-12 border-2 justify-between items-center p-2"
          onClick={handleClick}
        >
          <div>{props.data.Beer}</div>
          <div>{props.data.Brewery}</div>
          <div>{props.data.By}</div>
        </div>
      )}
    </>
  );
}
