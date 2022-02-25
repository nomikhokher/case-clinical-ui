import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-home-scroll',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 634px;
        overflow-y: scroll;
        scrollbar-color: white white;
        scrollbar-width: none;
      }
      /* Track */
      .scroll-section::-webkit-scrollbar-track {
        background: #fff;
      }

      /* Handle */
      .scroll-section::-webkit-scrollbar-thumb {
        background: #fff;
      }

      /* Handle on hover */
      .scroll-section::-webkit-scrollbar-thumb:hover {
        background: #fff;
      }
    </style>
    <div class="mx-auto dark:bg-gray-900 pt-12">
      <div class=" dark:bg-gray-900">
        <div class="flex px-5 justify-between items-center gap-4 pb-2">
          <div>
            <h1 class="text-2xl font-bold dark:text-white">Home NFTs</h1>
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

        <div class="text-sm color px-5 pt-4">
          <p class="dark:text-gray-400">
            •
            <span class="border-b border-white  dark:border-solid dark:border-2 dark:border-gray-400 w-28">
              Featured Artworks</span
            >
          </p>
        </div>

        <div class="scroll-section">
          <div class="mt-6 px-5">
            <div class="">
              <img
                src="/assets/mobile-ui/assets/images/home-scroll-img.png"
                alt=""
                class="h-72 w-full object-cover rounded-tr-xl rounded-tl-xl"
              />
            </div>
            <div class="shadow-blue-100 shadow-xl rounded-br-xl rounded-bl-xl dark:bg-gray-600">
              <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                <div class="flex justify-between items-center">
                  <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-black font-medium">
                    <h2>⏳ 1h 28m 11s</h2>
                  </div>
                  <div class="flex items-center gap-4 text-black">
                    <a href=""
                      ><img src="/assets/mobile-ui/assets/images/Filled.png" alt="" id="" class="w-full h-full"
                    /></a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <h2 class="text-3xl font-bold text-black pt-4">Sugar Rush</h2>
              </div>
              <div class="px-8 pt-4 pb-6 flex justify-between items-center">
                <div class="flex w-full gap-2 items-center">
                  <div class="">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <div class="text-black">
                    <small class="text-xs text-gray-400">Creator</small>
                    <p class="text-base font-bold">Kevin</p>
                  </div>
                </div>
                <div class="flex w-full gap-2 items-center justify-end">
                  <div class="py-2 px-3 bg-gray-100 rounded-full">
                    <img src="/assets/mobile-ui/assets/images/ethereum.png" alt="" class="w-full h-7 rounded-full" />
                  </div>
                  <div class="text-black">
                    <small class="text-xs text-gray-400">Reserve price</small>
                    <p class="text-base font-bold">0.32 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 px-5 dark:bg-gray-600">
            <div class="">
              <img
                src="/assets/mobile-ui/assets/images/home-scroll-img.png"
                alt=""
                class="h-72 w-full object-cover rounded-tr-xl rounded-tl-xl"
              />
            </div>
            <div class="shadow-blue-100 shadow-xl  rounded-br-xl rounded-bl-xl">
              <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                <div class="flex justify-between items-center">
                  <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-black font-medium">
                    <h2>⏳ 1h 28m 11s</h2>
                  </div>
                  <div class="flex items-center gap-4 text-black">
                    <a href=""
                      ><img src="/assets/mobile-ui/assets/images/Filled.png" alt="" id="" class="w-full h-full"
                    /></a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <h2 class="text-3xl font-bold text-black pt-4">Sugar Rush</h2>
              </div>
              <div class="px-8 pt-4 pb-6 flex justify-between items-center">
                <div class="flex w-full gap-2 items-center">
                  <div class="">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <div class="text-black">
                    <small class="text-xs text-gray-400">Creator</small>
                    <p class="text-base font-bold">Kevin</p>
                  </div>
                </div>
                <div class="flex w-full gap-2 items-center justify-end">
                  <div class="py-2 px-3 bg-gray-100 rounded-full">
                    <img src="/assets/mobile-ui/assets/images/ethereum.png" alt="" class="w-full h-7 rounded-full" />
                  </div>
                  <div class="text-black">
                    <small class="text-xs text-gray-400">Reserve price</small>
                    <p class="text-base font-bold">0.32 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="flex justify-between px-5 pt-4 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Ollie Barrett</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">3.842 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600 border dark:border-white"
              >
                Follow
              </button>
            </div>
          </div> -->

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/g6.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Chester Meyer</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">1.692 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-bl bg-transparent border-gray-500 border text-xs py-1.5 px-3 focus:outline-none dark:text-white dark:border-white"
              >
                Follow
              </button>
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/g7.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Lelia Wells</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">1.4058 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600 border dark:border-white"
              >
                Follow
              </button>
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/g9.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Jack jaen</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">0.8520 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-bl border-gray-500 border text-xs py-1.5 px-3 focus:outline-none bg-transparent dark:text-white dark:border-white"
              >
                Follow
              </button>
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/g8.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Juliat Laina</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">1.3650 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white  bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600  border dark:border-white"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileHomeScrollComponent {}
