import Header from "~/components/Header";
import WhatWeDoHero from "~/components/what-we-do/WhatWeDoHero";
import Services from "~/components/what-we-do/Services";
import ContractVehicles from "~/components/what-we-do/ContractVehicles";

export default function WhatWeDo() {
	return (
		<div className="bg-white">
			<div className="relative overflow-hidden">
				<Header />
				<main className="-mt-[116px]">
					<WhatWeDoHero />
					<Services />
					<ContractVehicles />
				</main>
			</div>
		</div>
	);
}
