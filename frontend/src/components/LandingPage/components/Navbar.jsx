import React from "react";

const Navbar = () => {
  return (
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto"
        aria-label="Global"
      >
        <div class="md:col-span-3">
          <a
            class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href=""
            aria-label="Preline"
          >
            <p className="font-extrabold text-4xl text-white">Ade</p>
          </a>
        </div>

        <div class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button
            type="button"
            class="py-2 px-6 inline-flex items-center gap-x-2 font-medium rounded-br-3xl border border-gray-200 text-primary text-xl bg-white hover:border-primary hover:bg-emerald-600 transition-all duration-300 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign in
          </button>

          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-white hover:bg-secondary hover:border-0 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <a
                class="relative inline-block font-bold text-white before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400"
                href="#"
                aria-current="page"
              >
                Home
              </a>
            </div>
            <div>
              <a class="inline-block text-white hover:text-gray-300" href="#service">
                Services
              </a>
            </div>
            <div>
              <a class="inline-block text-white hover:text-gray-300" href="#footer">
                Contact Us
              </a>
            </div>
            <div>
              <a class="inline-block text-white hover:text-gray-300" href="#about">
                About Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
