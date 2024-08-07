"use client";
import Beer from "../../../public/Corona.png";

export default function DynamicBackground(props: { image: string }) {
  const HandleClick = () => {
    console.log(props.image);
  };
  return (
    <div className="relative flex flex-col w-screen h-screen overflow-clip">
      <HorizontalLine image={props.image} offset={1} />
      <HorizontalLine image={Beer.src} offset={2} />
      <HorizontalLine image={props.image} offset={3} />
      <HorizontalLine image={Beer.src} offset={4} />
      <HorizontalLine image={props.image} offset={5} />
      <HorizontalLine image={Beer.src} offset={6} />
    </div>
  );
}

function HorizontalLine(props: { image: string; offset: number }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "120vw",
        height: "7rem",
        backgroundImage: "url(" + props.image + ")",
        backgroundRepeat: "repeat-x",
        backgroundPositionX: props.offset * -3 + "rem",
        marginTop: (props.offset - 1) * 7 - 1 + "rem",
        animation:
          "roll -" +
          props.offset +
          "s " +
          props.offset +
          "s ease-in-out infinite",
      }}
    ></div>
  );
}
