import React from "react";

const Hero = () => {
  return (
    <header className="relative mb-6 flex h-screen items-center justify-center overflow-hidden">
      <div className="relative z-30 h-full w-full bg-gradient-to-t from-white via-transparent">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="mt-4 text-5xl font-extrabold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] md:text-6xl">
            <span className="block text-center text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
              Kūlia i ka nu‘u
            </span>
          </h1>
          <p className="block text-center text-4xl font-extrabold text-gray-400 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] md:text-6xl">
            Committed to the
          </p>
          <p className="block text-center text-4xl font-extrabold text-gray-400 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] md:text-6xl ">
            pursuit of excellence
          </p>
        </div>
      </div>
      <video
        autoPlay
        loop
        playsInline
        muted
        className="absolute -top-[0px] z-10 min-h-full w-auto min-w-full max-w-none"
      >
        <source
          src="https://res.cloudinary.com/hutches/video/upload/f_auto,q_auto,w_1200/v1651847011/makai/production_ID_4782594.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Hero;

// <div>
//   <div className="md:w-full opacity-90">
//     <video
//       autoPlay
//       loop
//       playsInline
//       muted
//       className="absolute z-0 md:w-full"
//       //className="absolute z-0 min-w-full"
//       // src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
//       // alt=""
//     >
//       <source src="https://res.cloudinary.com/hutches/video/upload/v1651847011/makai/production_ID_4782594.mp4" />
//     </video>
//     {/* <div className="absolute top-0 z-10 h-[720px] w-full bg-blue-500 bg-opacity-40"></div> */}
//   </div>
//   <div className="relative z-20 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-4">
//     <div className="mx-auto max-w-7xl lg:px-8">
//       <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//         <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
//           <div className="lg:py-40">
//             <div className="md:hidden h-20"></div>
// <h1 className="mt-4 font-extrabold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-2xl lg:mt-6  xl:text-6xl">
//   <span className="block text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
//     Kūlia i ka nu‘u
//   </span>
// </h1>
// <p className="block text-2xl md:text-5xl font-extrabold text-gray-400 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
//   Commited to the
// </p>
//             <p className="block text-2xl md:text-5xl font-extrabold text-gray-400 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
//               pursuit of excellence
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="relative h-20 md:h-[200px]  bg-gradient-to-b from-transparent to-white"></div>
//   </div>
// </div>
