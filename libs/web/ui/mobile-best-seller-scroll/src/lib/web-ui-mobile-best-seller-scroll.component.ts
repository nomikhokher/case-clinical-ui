import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-best-seller-scroll',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 666px;
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
    <div class="mx-auto bg-gray-200 mt-8">
      <div class="bg-white dark:bg-gray-600">
        <div
          class="flex px-5 pb-2 justify-between items-center gap-4 border-b dark:border-solid dark:border-2 dark:border-gray-500"
        >
          <!-- <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon> -->
          <div>
            <div class=" relative  bg-slate-100 rounded-md py-1 search ">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src="/assets/mobile-ui/assets/images/search.png" alt="" class="w-5 h-5 " />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-slate-200 focus:outline-none block w-full text-lg font-normal pl-10 px-4 text-1xl h-12 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="Search or enter NFTs…"
              />
            </div>
          </div>
          <div>
            <h2 class="text-1xl font-medium title-font pl-1 text-gray-900 text-right dark:text-white">Cancel</h2>
          </div>
        </div>

        <div class="scroll-section">
          <div class="flex justify-between px-5 pt-4 items-center">
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
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/g1.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Ivan Gilbert</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">3 ETH</p>
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
                  <img src="/assets/mobile-ui/assets/images/g2.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Dollie Moore</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">2.5 ETH</p>
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
                  <img src="/assets/mobile-ui/assets/images/g3.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Julian Crawford</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">2.341 ETH</p>
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
                  <img src="/assets/mobile-ui/assets/images/g4.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Verna Mullins</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">2.28 ETH</p>
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
                  <img src="/assets/mobile-ui/assets/images/g5.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Shane Ramirez</h3>
                  <p class="text-xs text-gray-500 dark:text-indigo-400">3 ETH</p>
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
export class WebUiMobileBestSellerScrollComponent {}
