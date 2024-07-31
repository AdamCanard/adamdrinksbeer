import Background from "./components/background";
import Frontpage from "./components/frontpage";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Background>
        <Frontpage />
      </Background>
    </div>
  );
}
