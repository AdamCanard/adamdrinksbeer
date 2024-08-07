import DynamicBackground from "../components/dynamicbackground";
import PBR from "../../../public/PBR-s.png";

export default function Page() {
  return (
    <div className="w-full h-screen">
      <DynamicBackground image={PBR.src} />;
    </div>
  );
}
