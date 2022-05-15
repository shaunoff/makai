export default function Responsibility() {
  return (
    <div className="relative  bg-white py-8 lg:py-6">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#466E47] sm:text-4xl">
              Kuleana
            </h3>
            <p className="text-lg font-medium leading-6 text-gray-900">
              Responsibility
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Our Board of Directors will always maintain a majority of Native
              Hawaiian Directors. We feel a deep connection with, and
              responsibility to, the Hawaiian community. We believe it is our
              responsibility to work closely with local leaders to support the
              community in the most effective way possible.
            </p>
          </div>

          <div
            className="relative m-2 mt-10 overflow-hidden rounded-lg bg-[#466E47] shadow lg:mt-0 lg:ml-2"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto h-full w-full object-cover "
              width={490}
              src="https://res.cloudinary.com/hutches/image/upload/v1652573532/makai/bigstock-Hula-Dancers-4688711.jpg"
              alt="responsibility"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
