import Header from "~/components/Header";
import KekoaHero from "~/components/kekoa/KekoaHero";
import Learning from "~/components/kekoa/Learning";
import Responsibility from "~/components/kekoa/Responsibility";
import Standfor from "~/components/kekoa/Standfor";
import Support from "~/components/kekoa/Support";
import Teamwork from "~/components/kekoa/Teamwork";

export default function Index() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header type="kekoa" />
        <main className="-mt-[116px]">
          <KekoaHero />
          <Standfor />
          <Responsibility />
          <Teamwork />
          <Learning />
          {/* <Support /> */}
        </main>
      </div>
    </div>
  );
}
