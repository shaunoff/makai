import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Vision",
    description:
      "The Kekoa Foundation envisions a thriving lāhui which includes a Hawaiian community that is strong, healthy, educated, culturally enlightened, and economically self-sufficient. ",
  },
  {
    name: "Mission",
    description:
      "The Kekoa Foundation’s mission is to support, promote and advance the overall welfare and economic condition of Native Hawaiians in the State of Hawaii through educational, business, and community activities and programs. ",
  },
];

export default function Standfor() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-[#466E47]">
            What We Stand For
          </h2>
          {/* <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
