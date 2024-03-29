import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Inicio", href: "", action: "scrollToHome"},
  { name: "Servicio", href: "/servicios", action: ""},
  { name: "Nosotros", href: "", action: "scrollToOurTeam" },
  { name: "Proceso", href: "/proceso", action: "" },
];



type NavigationProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  positionRef: {
    homeRef: React.RefObject<HTMLElement>;
    ourTeamRef: React.RefObject<HTMLElement>;
    ourProcessRef: React.RefObject<HTMLElement>;
    ourServicesRef: React.RefObject<HTMLElement>;
  };
};

// TODO: Solve navigation for mobile format
export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  positionRef,
}: NavigationProps) {
  const handleNavigationClick = (action: string | null) => {
    if (action === "scrollToHome" && positionRef.homeRef.current) {
      positionRef.homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "scrollToOurTeam" && positionRef.ourTeamRef.current) {
      positionRef.ourTeamRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "scrollToOurProcess" && positionRef.ourProcessRef.current) {
      positionRef.ourProcessRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "scrollToOurServices" && positionRef.ourServicesRef.current) {
      positionRef.ourServicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled
          ? "bg-gradient-to-b from-blue-100 to-transparent"
          : "bg-gradient-to-b from-blue-100 to-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Valle del Volcan</span>
            <img
              className="h-8 w-auto"
              // TODO: Replace this with vdv logo
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to = {item.href}
              // href={item.href}
              /*
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor action
                handleNavigationClick(item.action);
              }}*/
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                // TODO: Replace this with vdv logo
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
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
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
