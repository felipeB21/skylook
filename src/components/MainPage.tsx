import AsidePage from "./AsidePage";
import CenterPage from "./CenterPage";
import RightPage from "./RightPage";

export default function MainPage() {
  return (
    <div className="w-[1200px] mx-auto flex justify-between mt-[61px]">
      <AsidePage />
      <CenterPage />
      <RightPage />
    </div>
  );
}
