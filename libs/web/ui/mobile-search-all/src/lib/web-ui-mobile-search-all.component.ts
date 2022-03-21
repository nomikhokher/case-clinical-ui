import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-search-all',
  template: `
    <style>
      /* width */
      .scroll-section-vertical {
        height: 299px;
      }
      .scroll-section-horizontal {
        /* height: 203px; */
      }
      .mobile-section {
        height: 762px;
      }
      .scroll-section::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
      .scroll-section {
        overflow-y: scroll;
        scrollbar-color: transparent;
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
      .hoverBorder:hover {
        border-bottom-width: 2px;
      }
    </style>
    <div class="mx-auto dark:bg-gray-900 pt-12 mobile-section">
      <div class=" dark:bg-gray-900">
        <section>
          <div class="flex px-5 justify-between items-center gap-4  pb-1">
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
              <h2 class="text-1xl font-medium title-font pl-1 text-right dark:text-white">Cancel</h2>
            </div>
          </div>
        </section>

        <section>
          <div
            class="w-full flex justify-between items-center px-4 text-black font-medium text-lg pt-2 search-all-main"
          >
            <div class="flex-shrink-0 h-10">
              <a href="dev/mobile-search-all"
                ><p
                  class="pb-2 text-gray-400 dark:text-white border-black border-b-2  hover:border-black dark:border-white hoverBorder"
                >
                  All
                </p></a
              >
            </div>
            <div class="flex-shrink-0  h-10">
              <a href="dev/mobile-search-creator"
                ><p class="pb-2 text-gray-400 dark:text-white  hover:border-black dark:border-white hoverBorder">
                  Creator
                </p></a
              >
            </div>
            <div class="flex-shrink-0  h-10">
              <a href=""
                ><p class="pb-2 text-gray-400 dark:text-white  hover:border-black dark:border-white hoverBorder">
                  Artworks
                </p></a
              >
            </div>
            <div class="flex-shrink-0  h-10">
              <a href=""
                ><p class="pb-2 text-gray-400 dark:text-white  hover:border-black dark:border-white hoverBorder">
                  Collection
                </p></a
              >
            </div>
          </div>
        </section>

        <h4 class="text-gray-400 text-base font-normal pt-6  mb-3  px-4">
          • <span class="border-b border-gray-400 pb-1 dark:text-white">Creator</span>
        </h4>
        <section
          class=" dark:bg-gray-900 flex gap-3 pt-5 pb-4 overflow-x-auto body-font scroll-section scroll-section-horizontal mt-3"
        >
          <div
            class=" ml-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
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
            class="flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
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
            class="mr-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
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

        <h4 class="text-gray-400 text-base font-normal pt-6   px-4">
          • <span class="border-b border-gray-400 pb-1 dark:text-white">Collection</span>
        </h4>
        <section
          class="dark:bg-gray-900 flex gap-3  pb-4 overflow-x-auto body-font scroll-section scroll-section-horizontal"
        >
          <div class=" w-full flex items-center gap-4 px-4   touch-pan-x">
            <div
              class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3  mx-auto  shadow-blue-500/20  dark:bg-gray-700"
            >
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/lady.png"
                  alt=""
                  class="w-full h-28 mx-auto object-cover rounded-xl"
                />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4 dark:text-white">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div
              class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3  mx-auto  shadow-blue-500/20  dark:bg-gray-700"
            >
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/lady.png"
                  alt=""
                  class="w-full h-28 mx-auto object-cover rounded-xl"
                />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4 dark:text-white">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div
              class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3  mx-auto  shadow-blue-500/20  dark:bg-gray-700"
            >
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/lady.png"
                  alt=""
                  class="w-full h-28 mx-auto object-cover rounded-xl"
                />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4 dark:text-white">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div
              class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3  mx-auto  shadow-blue-500/20  dark:bg-gray-700"
            >
              <div class="">
                <img
                  src="/assets/mobile-ui/assets/images/lady.png"
                  alt=""
                  class="w-full h-28 mx-auto object-cover rounded-xl"
                />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4 dark:text-white">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class WebUiMobileSearchAllComponent {}
