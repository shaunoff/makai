export default function Learning() {
  return (
    <div className="relative  bg-white py-8 lg:py-6">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#466E47] sm:text-4xl">
              ‘Ike Loa
            </h3>
            <p className="text-lg font-medium leading-6 text-gray-900">
              Learning and Seeking Knowledge
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Education and knowledge can be obtained in a variety of ways such
              as formal schooling or hands-on experience, and each form is
              equally important as the next. We believe that education at all
              levels, and at all stages of life, is an essential component of a
              community’s overall well-being.
            </p>
          </div>

          <div
            className="relative m-2 mt-10 overflow-hidden rounded-lg bg-[#466E47] shadow lg:mt-0 lg:ml-2"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto h-full w-full object-cover "
              width={490}
              src="https://res.cloudinary.com/hutches/image/upload/v1652574152/makai/bigstock-Happy-Smiling-Kid-Learning-To--290154319.jpg"
              alt="happy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
