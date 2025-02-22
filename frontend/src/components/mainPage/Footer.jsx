
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center px-16 py-20 mt-10 w-full bg-teal-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-start mt-12 mb-4 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col text-base leading-6 text-zinc-700">
          <div className="text-2xl font-medium text-emerald-700">LOGO</div>
          <address className="mt-12 leading-6 max-md:mt-10 not-italic">
            280 Nothern Kaduna 326-324 Kaduna
            <br />
            125-1400.
          </address>
          <h3 className="mt-14 text-xl text-black max-md:mt-10">Newsletter</h3>
          <form className="mt-8">
            <label htmlFor="email" className="sr-only">
              Input your email
            </label>
            <div className="flex gap-5">
              <input
                type="email"
                id="email"
                placeholder="Input your email"
                className="flex-auto my-auto"
              />
              <button type="submit" aria-label="Subscribe">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7ebe1bedf39b789db034ccb2b4b4ba905599fce39872d1c62a23dbbcd8af20?apiKey=27e3725db8b34053b390a33ddc94eaed&"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
            <div className="shrink-0 mt-2 h-px bg-black border border-black border-solid" />
          </form>
        </div>
        <nav className="flex-auto mt-3.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-6 text-zinc-700 max-md:mt-10">
                <h3 className="text-xl font-medium text-black">Navigation</h3>
                <ul className="mt-10 space-y-8">
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-6 text-zinc-700 max-md:mt-10">
                <h3 className="text-xl font-medium text-black">Help</h3>
                <ul className="mt-10 space-y-8">
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#terms">Terms of use</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <h3 className="text-xl font-medium leading-8 text-black">
                  Follow us on
                </h3>
                <div className="flex gap-5 justify-between mt-10">
                  <a href="#" aria-label="Facebook">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/47031bec62dbd0d1eab9ecfd8f7dead418842c165220558bf5989666ba593230?apiKey=27e3725db8b34053b390a33ddc94eaed&"
                      alt=""
                      className="shrink-0 w-6 aspect-square"
                    />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/70f21fbd398e1ccb1a6c158a759fa202849670dfa4f09f14a8d0f4a270b3693e?apiKey=27e3725db8b34053b390a33ddc94eaed&"
                      alt=""
                      className="shrink-0 w-6 aspect-square"
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f4a639b307fcecfe93ed51ae68e67ed9afaa2a77400178e6d72468cff13429?apiKey=27e3725db8b34053b390a33ddc94eaed&"
                      alt=""
                      className="shrink-0 w-6 aspect-square"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
