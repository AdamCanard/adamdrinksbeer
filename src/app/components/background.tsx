import "../globals.css";

export default function Background(props: { children?: React.ReactNode }) {
  //TODO write code that dynamically makes the background with the single image
  return (
    <>
      <div className="flex justify-center min-w-[100vw] min-h-[100vh] bg-[url('../../public/PBRepeat2.png')] bg-fit animate-roll">
        {props.children}
      </div>
    </>
  );
}
