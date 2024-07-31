import "../globals.css";

export default function Background(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[url('../../public/PBR.png')] bg-repeat-round bg-opacity-5">
        <div className="">{props.children}</div>
      </div>
    </>
  );
}
