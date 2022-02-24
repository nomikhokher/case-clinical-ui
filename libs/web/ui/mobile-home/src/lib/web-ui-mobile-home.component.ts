import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-home',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .mx-auto .scroll-section {
        overflow-x: scroll;
        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
      }

      /* Track */
      .scroll-section::-webkit-scrollbar-track {
        background: transparent !important;
      }

      /* Handle */
      .scroll-section::-webkit-scrollbar-thumb {
        background: transparent;
      }

      /* Handle on hover */
      .scroll-section::-webkit-scrollbar-thumb:hover {
        background: transparent !important;
      }
    </style>
    <div class="mx-auto bg-white dark:bg-black">
      <div class="bg-white pt-8 dark:bg-black">
        <div class="flex px-5 justify-between items-center gap-4 pb-1">
          <div>
            <div class="mt-1 relative bg-slate-200 rounded-md py-2 search">
              <h1 class="font-bold text-2xl dark:text-white">Home NFTs</h1>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 border-solid border-2 border-black rounded-lg dark:text-white border-b dark:border-solid dark:border-2 dark:border-white"
              style="padding: 3px;"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <hr class="dark:border-t dark:border-solid dark:border-2 dark:border-gray-600" />
        <div class="text-sm color px-5 pt-4 pb-5">
          <p class="dark:text-gray-400">
            •
            <span class="border-b border-white  dark:border-solid dark:border-2 dark:border-gray-400 w-28">
              New Followers</span
            >
          </p>
        </div>

        <section class=" dark:bg-black flex gap-3 pt-5 pb-4 overflow-x-auto body-font scroll-section">
          <div
            class=" ml-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img
                  src="/assets/mobile-ui/assets/images/Avatar.png"
                  alt=""
                  class="rounded-full mx-auto w-16 h-16 "
                  style="margin-top: -50px;"
                />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white
                  "
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img
                  src="/assets/mobile-ui/assets/images/Avatar.png"
                  alt=""
                  class="rounded-full mx-auto w-16 h-16 "
                  style="margin-top: -50px;"
                />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div
            class="mr-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class="justify-items-center text-center ">
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/Avatar.png"
                  alt=""
                  class="rounded-full mx-auto w-16 h-16 "
                  style="margin-top: -50px;"
                />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="text-sm color px-5 pt-4 pb-5">
          <p class="dark:text-gray-400">
            •
            <span class="border-b border-white  dark:border-solid dark:border-2 dark:border-gray-400 w-28">
              Top Collection</span
            >
          </p>
        </div>

        <section class="flex gap-3 pb-1 overflow-x-auto body-font scroll-section">
          <div
            class="ml-2 flex-none first:pl-3 last:pr-3 px-2 pt-0 mt-2 pb-0 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full pt-3" />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">The Cubes of Destiny</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
          <div
            class="flex-none first:pl-3 last:pr-3 px-2 pt-0 mt-2 pb-0 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full pt-3" />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">The Cubes of Destiny</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
          <div
            class="mr-2 flex-none first:pl-6 last:pr-6 px-2 pt-0 mt-2 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-900"
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full pt-3" />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base dark:text-white">The Cubes of Destiny</h3>
                <p class="text-xs dark:text-white">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div
          class="w-full flex justify-between items-center pt-3 px-4 border-t mt-2 pb-2 dark:bg-black dark:border-solid dark:border-2 dark:border-gray-500"
        >
          <div class="flex-shrink-0">
            <!-- <a href=""><img src="/assets/mobile-ui/assets/images/home.png" alt="" id="" class="w-full h-8" /></a> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div class="flex-shrink-0">
            <!-- <a href=""><img src="/assets/mobile-ui/assets/images/search.png" alt="" id="" class="w-full h-8  " /></a> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/compass.png" alt="" id="" class="w-full h-8" /></a>
          </div>
          <div class="flex-shrink-0">
            <!-- <a href=""><img src="/assets/mobile-ui/assets/images/notify.png" alt="" id="" class="w-full h-8 " /></a> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 dark:text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <div class="flex-shrink-0">
            <!-- <a href=""><img src="/assets/mobile-ui/assets/images/pro-img.png" alt="" id="" class="w-full h-8 " /></a> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class WebUiMobileHomeComponent {}
