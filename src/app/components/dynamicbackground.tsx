"use client";

export default function DynamicBackground(props: { image: string }) {
  const HandleClick = () => {
    console.log(props.image);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <HorizontalLine image={props.image} offset={0} />
      <HorizontalLine image={props.image} offset={1} />
      <HorizontalLine image={props.image} offset={2} />
      <HorizontalLine image={props.image} offset={3} />
      <HorizontalLine image={props.image} offset={4} />
      <HorizontalLine image={props.image} offset={5} />
    </div>
  );
}

function HorizontalLine(props: { image: string; offset: number }) {
  return (
    <div
      className={`flex w-[120vw] h-28 bg-pbr bg-repeat-x ml-${
        props.offset * 4
      }`}
    ></div>
  );
}
