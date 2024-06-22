"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/next.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/posts",
      label: "posts",
    },
    {
      href: "/create_post",
      label: "create post",
    },
  ];
  return (
    <nav className="my-7 flex justify-between items-center border-b-2 border-zinc-200 pb-6 ">
      <Image src={logo} alt="logo" className=" w-32" width={128} height={128} />
      <div>
        <div className="hidden lg:flex">
          <ul className="flex gap-7 ">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <Link
                    className={`uppercase font-bold ${
                      pathName.endsWith(navLink.href)
                        ? "text-zinc-800"
                        : "text-zinc-400"
                    } `}
                    href={navLink.href}
                  >
                    {navLink.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative ">
          <button
            className="flex lg:hidden"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Dialog
            open={mobileMenuOpen}
            onClose={() => {
              setMobileMenuOpen(false);
            }}
            className="lg:hidden"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 flex flex-col">
                    {navLinks.map((navLink, index) => {
                      return (
                        <Link
                          key={index}
                          className={`uppercase font-bold ${
                            pathName.endsWith(navLink.href)
                              ? "text-zinc-800"
                              : "text-zinc-400"
                          } `}
                          href={navLink.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                        >
                          {navLink.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Header;
