import React from "react";

import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Services", href: "#" },
  { name: "8(a) Contracting", href: "#" },
  { name: "Kekoa Foundation", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Header = () => {
  return (
    <div className="relative z-10 py-2">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            <a href="/test">
              <span className="sr-only">Workflow</span>
              <img
                className="h-20 w-auto brightness-0 invert filter sm:h-20"
                src="images/Makai.png"
                alt=""
              />
            </a>

            <MobileMenu navigation={navigation} />
          </div>
          <div className="hidden justify-end space-x-8 md:ml-10 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="hidden md:flex md:items-center md:space-x-6">
          <a
            href="/test"
            className="text-base font-medium text-white hover:text-gray-300"
          >
            Log in
          </a>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
