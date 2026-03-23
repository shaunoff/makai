const contractVehicles = [
	{
		name: "GSA MAS",
		description:
			"MFSIS · IT Professional Services · HACS(SIN) Highly Adaptive Cyber Security Services",
		logo: "/images/contract-vehicles/gsa-mas.png",
	},
	{
		name: "Seaport Next Generation",
		description: "Seaport NxG",
		logo: "/images/contract-vehicles/seaport-nxg.webp",
	},
	{
		name: "SBIR Phase II",
		description:
			"Awarded SBIR Phase II IDIQ · SBIR – Use Phase III eligible",
		logo: "/images/contract-vehicles/sbir.jpeg",
	},
	{
		name: "SBA 8(a) Certified",
		description:
			"As a Native Hawaiian Organization (NHO) SBA certified 8(a), we provide streamlined contracting to speed up procurement, lower costs, and reduce risk.",
		logo: "/images/contract-vehicles/sba.jpg",
	},
	{
		name: "OASIS+",
		description: "One Acquisition Solution for Integrated Services",
		logo: "/images/contract-vehicles/oasis-plus.png",
	},
	{
		name: "MDA SHIELD",
		description: "Missile Defense Agency SHIELD contract vehicle",
		logo: "/images/contract-vehicles/mda.png",
	},
	{
		name: "IWRP Consortium",
		description: "Irregular Warfare Research Program Consortium",
		logo: "/images/contract-vehicles/iwrp.png",
	},
];

export default function ContractVehicles() {
	return (
		<div className="relative bg-gray-50 py-12 lg:py-16">
			<div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="relative">
					<h3 className="mt-2 bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
						Contract Vehicles
					</h3>
					<p className="mt-4 text-lg text-gray-500">
						Makai holds a variety of contract vehicles to support our
						government customers.
					</p>
				</div>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{contractVehicles.slice(0, 4).map((vehicle) => (
						<div
							key={vehicle.name}
							className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
						>
							<img
								src={vehicle.logo}
								alt={vehicle.name}
								className="h-20 w-auto max-w-full object-contain"
							/>
							<h4 className="mt-4 text-center text-lg font-semibold text-gray-900">
								{vehicle.name}
							</h4>
							<p className="mt-2 text-center text-sm text-gray-500">
								{vehicle.description}
							</p>
						</div>
					))}
				</div>
				<div className="mt-10 flex justify-center gap-6">
					{contractVehicles.slice(4).map((vehicle) => (
						<div
							key={vehicle.name}
							className="flex w-full max-w-xs flex-col items-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:w-1/2 lg:w-1/4"
						>
							<img
								src={vehicle.logo}
								alt={vehicle.name}
								className="h-20 w-auto max-w-full object-contain"
							/>
							<h4 className="mt-4 text-center text-lg font-semibold text-gray-900">
								{vehicle.name}
							</h4>
							<p className="mt-2 text-center text-sm text-gray-500">
								{vehicle.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
