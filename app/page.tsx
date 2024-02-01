import Image from "next/image";
import Category from "./components/home/Category";
import Banner from "./components/home/Banner";

export default function Home() {
  return (
    <div>
      <Category/>
      <Banner/>
    </div>
  );
}
