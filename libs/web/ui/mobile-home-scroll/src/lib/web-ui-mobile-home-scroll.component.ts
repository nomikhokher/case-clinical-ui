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
        height: 580px;
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

        <!-- Scroll Start Point -->
        <div class="scroll-section">
          <div class="mt-4 px-5">
            <div class="dark:bg-gray-700">
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/home-scroll-img.png"
                  alt=""
                  class="h-72 w-full object-cover rounded-tr-xl rounded-tl-xl dark:rounded-none"
                />
              </div>
              <div class="shadow-blue-100 shadow-xl rounded-br-xl rounded-bl-xl">
                <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                  <div class="flex justify-between items-center">
                    <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-black font-medium dark:bg-gray-600">
                      <h2 class="dark:text-white">⏳ 1h 28m 11s</h2>
                    </div>
                    <div class="flex items-center gap-4 text-black">
                      <a href=""
                        ><img src="/assets/mobile-ui/assets/images/Filled.png" alt="" id="" class="w-full h-full"
                      /></a>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 dark:text-white"
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
                  <h2 class="text-3xl font-bold text-black pt-4 dark:text-white">Sugar Rush</h2>
                </div>
                <div class="px-8 pt-4 pb-6 flex justify-between items-center dark:bg-gray-700">
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
                      <p class="text-base font-bold dark:text-white">Kevin</p>
                    </div>
                  </div>
                  <div class="flex w-full gap-2 items-center justify-end">
                    <div class="py-2 px-3 bg-gray-100 rounded-full  dark:bg-gray-600">
                      <img src="/assets/mobile-ui/assets/images/ethereum.png" alt="" class="w-full h-7 rounded-full" />
                    </div>
                    <div class="text-black">
                      <small class="text-xs text-gray-400">Reserve price</small>
                      <p class="text-base font-bold dark:text-white">0.32 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 px-5 pb-2">
            <div class="dark:bg-gray-700">
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/home-scroll-img.png"
                  alt=""
                  class="h-72 w-full object-cover rounded-tr-xl rounded-tl-xl dark:rounded-none"
                />
              </div>
              <div class="shadow-blue-100 shadow-xl rounded-br-xl rounded-bl-xl">
                <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                  <div class="flex justify-between items-center">
                    <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-black font-medium dark:bg-gray-600">
                      <h2 class="dark:text-white">⏳ 1h 28m 11s</h2>
                    </div>
                    <div class="flex items-center gap-4 text-black">
                      <a href=""
                        ><img src="/assets/mobile-ui/assets/images/Filled.png" alt="" id="" class="w-full h-full"
                      /></a>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 dark:text-white"
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
                  <h2 class="text-3xl font-bold text-black pt-4 dark:text-white">Sugar Rush</h2>
                </div>
                <div class="px-8 pt-4 pb-6 flex justify-between items-center dark:bg-gray-700">
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
                      <p class="text-base font-bold dark:text-white">Kevin</p>
                    </div>
                  </div>
                  <div class="flex w-full gap-2 items-center justify-end">
                    <div class="py-2 px-3 bg-gray-100 rounded-full  dark:bg-gray-600">
                      <img src="/assets/mobile-ui/assets/images/ethereum.png" alt="" class="w-full h-7 rounded-full" />
                    </div>
                    <div class="text-black">
                      <small class="text-xs text-gray-400">Reserve price</small>
                      <p class="text-base font-bold dark:text-white">0.32 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Scroll End Point -->

        <section>
          <div
            class="w-full flex justify-between items-center pt-3 px-4 border-t mt-2 pb-2 dark:bg-gray-900 dark:border-solid dark:border-2 dark:border-gray-500"
          >
            <div class="flex-shrink-0">
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
    </div>
  `,
})
export class WebUiMobileHomeScrollComponent {}
