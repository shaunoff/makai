import {
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Resilient",
    description:
      "The HONU is able to accommodate multiple WAN connections concurrently.  The HONU serves as a gateway for any network type including 5G, SATCOM, and Tactical Data Links. ",
    icon: ShieldCheckIcon,
  },
  {
    id: 2,
    name: "Rapidly Deployable",
    description:
      "The HONU's plug-and-play design is easily adapted to meet user requirements.  Makai's vendor-agnostic approach allows us to integrate any mission critical hardware or software component.",
    icon: BoltIcon,
  },
  {
    id: 3,
    name: "Optimized Capacity",
    description:
      "The HONU's autosensing firewall switches between networks to minimize latency and optimize throughput.",
    icon: GlobeAltIcon,
  },
];

export default function NetworkManagement() {
  return (
    <div className="relative  bg-white py-8 lg:py-6">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="mt-2  text-blue-500 text-3xl font-extrabold tracking-tight sm:text-4xl">
             <p>Hardened Operational</p>
             <p>Networking Unit</p> 
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              To enable the rapid deployment and reconfiguration of multi-domain mobile network architectures, Makai developed the Hardened Operational Networking Unit (HONU), a flexible edge compute platform.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="shadow-lg0 absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-b from-blue-400 to-blue-600 p-3 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative m-2 mt-10 overflow-hidden rounded-lg lg:mt-0 lg:ml-2"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto h-full w-full object-cover"
              width={490}
              src="images/honu.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
