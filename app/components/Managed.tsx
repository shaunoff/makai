import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Systems Engineering & Integration",
    description:
      "Our SMEs are currently supporting complex, cross-service DoD systems.",
  },
  {
    name: "Managed Network Services",
    description:
      "Makai provides a full range of network management services including tactical network design, installation, and access management.",
  },
  {
    name: "Data Management & Cloud Migration",
    description:
      "Makai's SMEs are currently supporting cloud migration efforts with the U.S. Air Force.",
  },
  {
    name: "Application Development & DevSecOps",
    description:
      "Our SMEs are currently leading agile process redesign and integration efforts for DoD customers.",
  },
  {
    name: "Cybersecurity",
    description:
      "Makai is currently providing network modernization and RMF compliance expertise in support of the U.S. Marine Corps.",
  },
  {
    name: "Business Consulting & Process Improvement",
    description:
    "Makai advises government and industry organizations on pathways to organizational efficiency and process optimization.",
  },
  {
    name: "Technology Maturation & Risk Reduction",
    description:
    "Within our Gemini 5G test lab, Makai conducts IRAD projects to evaluate emerging technologies including AI/ML and 5G.",
  },
  {
    name: "SETA / A&AS",
    description:
      "Through a prime contract, Makai is currently providing SETA support for the Navel Education Training Command (NETC).",
  },
];

export default function ProfessionalServices() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mt-2 bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            What We Do
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            Makai is committed to providing exceptional services to our government and commercial customers.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-blue-500"
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
