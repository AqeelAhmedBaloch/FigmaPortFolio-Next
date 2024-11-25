import FuturedWork from "./components/futuredWork";
import Hero from "./components/hero";
import RecentPost from "./components/recentPost";

export default function Home() {
  return (
    <div>
      <Hero/>
      <RecentPost/>
      <FuturedWork/>
    </div>
  );
}
