import Header from "~/components/Header";
import Hero from "~/components/Hero";
import NetworkManagement from "~/components/NetworkManagement";
import Managed from "~/components/Managed";



export default function Index() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />
        <main className="-mt-[116px]">
          <Hero />
          <Managed />
          <NetworkManagement />
          {/* <FiveG />
          <SoftwareSystems /> */}
          {/* <ProfessionalServices /> */}
        </main>
      </div>
    </div>
  );
}