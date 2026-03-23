const WhatWeDoHero = () => {
	return (
		<header style={{ minHeight: "600px" }}
			className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 pt-24">
			<div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
				<h1 className="text-4xl font-extrabold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.3)] md:text-6xl">
					What We Do
				</h1>
				<p className="mt-4 max-w-2xl text-lg text-blue-200 md:text-xl">
					Makai is committed to providing exceptional services to our
					government and commercial customers.
				</p>
				<img
					src="/images/cmmc.webp"
					alt="CMMC Level 2 Certification"
					style={{ maxHeight: "200px" }}
					className="mt-8 w-auto"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-60"></div>
		</header>
	);
};

export default WhatWeDoHero;
