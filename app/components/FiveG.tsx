import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const competencies = [
  {
    name: "Consultancy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CloudUploadIcon,
  },
  {
    name: "Software & Systems Engineering",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: LockClosedIcon,
  },
  {
    name: "C5ISR",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RefreshIcon,
  },
  //   {
  //     name: "Advanced Security",
  //     description:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //     icon: ShieldCheckIcon,
  //   },
  //   {
  //     name: "Powerful API",
  //     description:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //     icon: CogIcon,
  //   },
  //   {
  //     name: "Database Backups",
  //     description:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //     icon: ServerIcon,
  //   },
];

export default function FiveG() {
  return (
    <div className="relative bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">
          Deploy faster
        </h2> */}
        <p className="mt-2 bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
          5G Research & Development
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {competencies.map((competency) => (
              <div key={competency.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-100 px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-blue-400 to-blue-600 p-3 shadow-lg">
                        <competency.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-blue-600">
                      {competency.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {competency.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
