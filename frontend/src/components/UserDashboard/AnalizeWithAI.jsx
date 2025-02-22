import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const AnalizeWithAI = () => {
  return (
    <div>
      <div class="min-h-screen relative">
        <div class="h-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-medium text-xl">Ade</p>

            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to Ade AI
            </h1>
            <p class="mt-3 text-gray-600">
              Your AI-powered copilot for analylizing data
            </p>
          </div>

          <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <input
                type="text"
                class="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Ask me anything..."
              />
              <div class="absolute top-1/2 end-2 -translate-y-1/2">
                <button
                  type="button"
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <FaCircleArrowUp className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
          <ul class="mt-16 space-y-5">
            <li class="flex gap-x-2 sm:gap-x-4">
              {/* <svg
                class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="38" rx="6" fill="#2563EB" />
                <path
                  d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white" />
              </svg> */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
              >
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="14"
                  rx="2"
                  ry="2"
                  fill="#2563EB"
                />
                <rect
                  x="7"
                  y="2"
                  width="10"
                  height="5"
                  rx="2"
                  ry="2"
                  fill="#2563EB"
                />
                <circle cx="8.5" cy="13.5" r="1.5" fill="white" />
                <circle cx="15.5" cy="13.5" r="1.5" fill="white" />
                <rect
                  x="10"
                  y="16"
                  width="4"
                  height="1.5"
                  rx="0.75"
                  ry="0.75"
                  fill="white"
                />
              </svg>

              <div class="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                <h2 class="font-medium text-gray-800 dark:text-white">
                  How can we help?
                </h2>
                <div class="space-y-1.5">
                  <p class="mb-1.5 text-sm text-gray-800 dark:text-white">
                    You can ask questions like:
                  </p>
                  <ul class="list-disc list-outside space-y-1.5 ps-3.5">
                    <li class="text-sm text-gray-800 dark:text-white">
                      What's Ade?
                    </li>

                    <li class="text-sm text-gray-800 dark:text-white">
                      What I can Ade chatbot do?
                    </li>

                    <li class="text-sm text-gray-800 dark:text-white">
                      Is there a PRO version?
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
              <div class="grow text-end space-y-3">
                <div class="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                  <p class="text-sm text-white">What's Ade?</p>
                </div>
              </div>

              <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span class="text-sm font-medium text-white leading-none">
                  AZ
                </span>
              </span>
            </li>
          </ul>
        </div>

        <footer class="max-w-4xl mx-auto sticky bottom-0 z-10 border-t border-gray-200 px-4 sm:px-6 lg:px-0 dark:bg-neutral-900 dark:border-neutral-700">
          <div class="relative flex flex-row">
            <textarea
              class="p-4 pb-12 block w-full resize-none pr-10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything..."
            ></textarea>

            <div class="absolute  right-px  p-2 rounded-b-lg dark:bg-neutral-900">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-x-1">
                  <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AnalizeWithAI;
