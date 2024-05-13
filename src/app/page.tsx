import Navbar from "@/components/Navbar";
import HomePageContentChanger from "@/components/HomePageContentChanger";
import HomePageContainer from "@/components/HomePage-All/HomePageContainer";

export default function Home() {
  return (
    <div className="w-[1048px] h-full bg-sectionColour rounded-lg flex flex-col items-center">
      <Navbar />
      <HomePageContentChanger />
      <HomePageContainer />
    </div>
  );
}
