import Frontpage from "./components/frontpage";
import Background from "./components/background";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Background>
        <Frontpage />
      </Background>
    </div>
  );
}
