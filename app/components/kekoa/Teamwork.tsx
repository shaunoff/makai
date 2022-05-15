export default function Teamwork() {
  return (
    <div className="relative  bg-white py-8 lg:py-6">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div
            className="relative m-2 mt-10 overflow-hidden rounded-lg bg-[#466E47] shadow lg:mt-0 lg:ml-2"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto h-full w-full object-cover "
              width={490}
              src="https://res.cloudinary.com/hutches/image/upload/v1652573824/makai/bigstock-Solidarity-Unite-People-Hands--381988193.jpg"
              alt="teamwork"
            />
          </div>
          <div className="relative">
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#466E47] sm:text-4xl">
              Lōkahi
            </h3>
            <p className="text-lg font-medium leading-6 text-gray-900">
              Teamwork, Collaboration and Unity
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We firmly believe that people, companies, and communities that
              work together can achieve more. We are committed to supporting
              programs and pursuing initiatives that have a positive, meaningful
              and lasting impact on the lāhui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
