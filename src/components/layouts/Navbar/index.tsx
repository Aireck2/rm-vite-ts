import { ToggleMobileNav } from "@/components/basics";
import { useDialog } from "@/hooks";
import { FC, ReactNode } from "react";

import { NavbarLayout } from "./styles";

export interface NavbarProps {
  items: MenuItem[];
  children?: ReactNode;
}

interface MenuItem {
  key?: string;
  name: string;
  href: string;
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
  const itemClassSelected =
    "bg-yellow-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const itemClass =
    "text-gray-800 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  const mobileItem =
    "text-gray-800 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  const mobileItemSelected =
    "bg-yellow-900 text-white block px-3 py-2 rounded-md text-base font-medium";
  const { open, handleToggle } = useDialog();

  return (
    <NavbarLayout>
      <div className="min-h-full min-w-full">
        <nav className="">
          <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-25"
                    src="/src/assets/rickmorty-logo.svg"
                    alt="Rick and Morty Logo"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {items?.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={itemClass}
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-800 p-2 text-gray-300 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={handleToggle}
                >
                  <ToggleMobileNav open={open} />
                </button>
              </div>
            </div>
          </div>

          {open ? (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {items?.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={mobileItem}
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </NavbarLayout>
  );
};
