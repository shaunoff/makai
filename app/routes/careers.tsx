import Header from "~/components/Header";
import Hero from "~/components/Hero";

// import Header from "~/components/Header";
export default function Index() {
  return (
    <div className="">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
        <Header />
      </div>
      <main className="flex w-full items-center justify-center p-24">
        <iframe
          src="https://app.smartsheet.com/b/form/73939e5b36cd49b4bb58ece8abbeea7d"
          width="100%"
          height="800"
          frameBorder="0"
          style={{ border: "none" }}
          title="Smartsheet Form"
        ></iframe>
        {/* <Hero careers /> */}
        {/* <FiveG />
          <SoftwareSystems /> */}
        {/* <ProfessionalServices /> */}
      </main>
    </div>
  );
}
