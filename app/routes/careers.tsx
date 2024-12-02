import Header from "~/components/Header";
import Hero from "~/components/Hero";

// import Header from "~/components/Header";
export default function Index() {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
        <Header />
      </div>
      <main className="flex w-full items-center justify-center pt-24">
        <iframe
          src="https://makaillc.bamboohr.com/careers"
          width="100%"
          height="1400px"
          style={{ border: "none", }}
          title="Smartsheet Form"
        />
        {/* <Hero careers /> */}
        {/* <FiveG />
          <SoftwareSystems /> */}
        {/* <ProfessionalServices /> */}
      </main>
    </div>
  );
}
