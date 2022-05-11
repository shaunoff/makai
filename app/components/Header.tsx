import { Link } from "@remix-run/react";
import React from "react";

import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#" },
  { name: "8(a) Contracting", href: "#" },
  { name: "Kekoa Foundation", href: "/kekoa-foundation" },
  { name: "Contact Us", href: "#" },
];

interface HeaderProps {
  type?: string;
}

const Header = ({ type = "default" }: HeaderProps) => {
  return (
    <div className="relative z-40 py-2">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
            <a href="/test">
              <span className="sr-only">Makai</span>
              <img
                className={`h-24 w-auto ${
                  type === "default" && "brightness-0 invert filter"
                }`}
                src={
                  type === "default"
                    ? "images/Makai.png"
                    : "https://res.cloudinary.com/hutches/image/upload/v1652228148/makai/kekoa.png"
                }
                alt=""
              />
            </a>

            <MobileMenu navigation={navigation} />
          </div>
          <div className="hidden justify-end space-x-8 md:ml-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </Link>
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
