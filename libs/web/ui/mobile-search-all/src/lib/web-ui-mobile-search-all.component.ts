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
        height: 203px;
      }
      .scroll-section-follower {
        height: 546px;
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
    </style>
    <div class="mx-auto dark:bg-gray-900 pt-12">
      <div class=" dark:bg-gray-900">
        <section>
          <div class="w-full pt-8 pb-4 px-4 grid grid-cols-5 items-center">
            <div class="relative col-span-4">
              <img class="absolute top-5 left-4" src="/assets/image/Searchbc.png" alt="" id="" />
              <input
                type="text"
                name="Allsearch"
                id=""
                class="rounded-lg w-full py-4 pl-12 pr-4 text-lg font-medium border-2 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500 bg-gray-100"
                placeholder="Search or enter NFTs..."
              />
            </div>
            <div class="text-right col-span-1">
              <a href="">
                <button class="border-none outline-none bg-transparent text-lg font-medium capitalize">cancel</button>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div
            class="w-full flex justify-between items-center px-4 border-b border-white text-black font-medium text-lg pt-2 search-all-main"
          >
            <div class="flex-shrink-0">
              <a href=""><p class="pb-2 text-gray-400 hover:text-black hover:border-b-2 hover:border-black">All</p></a>
            </div>
            <div class="flex-shrink-0">
              <a href=""
                ><p class="pb-2 text-gray-400 hover:text-black  hover:border-b-2 hover:border-black">Creator</p></a
              >
            </div>
            <div class="flex-shrink-0">
              <a href=""
                ><p class="pb-2 text-gray-400 hover:text-black  hover:border-b-2 hover:border-black">Artworks</p></a
              >
            </div>
            <div class="flex-shrink-0">
              <a href=""
                ><p class="pb-2 text-gray-400 hover:text-black  hover:border-b-2 hover:border-black">Collection</p></a
              >
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-gray-400 text-base font-normal pt-6  mb-3  px-4">
            • <span class="border-b border-gray-400 pb-1">Creator</span>
          </h4>
          <div class="horizon-scroll overflow-y-auto w-full flex items-center gap-4 px-4 overflow-auto  touch-pan-x">
            <div
              class="customer-nft shadow-blue-100 shadow-lg text-center mt-10 px-6 py-4 mb-4 rounded-xl w-36 flex-shrink-0"
            >
              <div class="-mt-6">
                <img src="/assets/image/Avatar.png" alt="" class="w-16 h-16 mx-auto object-cover -mt-12" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">Ollie Barrett</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
                <a href="#" class="">
                  <button
                    class="block w-20 mx-auto customer-button text-white font-light text-sm capitalize py-1 rounded-full"
                  >
                    follow
                  </button>
                </a>
              </div>
            </div>
            <div
              class="customer-nft shadow-blue-100 shadow-lg text-center mt-10 px-6 py-4 mb-4 rounded-xl w-36 flex-shrink-0"
            >
              <div class="-mt-6">
                <img src="/assets/image/Avatar.png" alt="" class="w-16 h-16 mx-auto object-cover -mt-12" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">Ollie Barrett</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
                <a href="#" class="">
                  <button
                    class="block w-20 mx-auto customer-button text-white font-light text-sm capitalize py-1 rounded-full"
                  >
                    follow
                  </button>
                </a>
              </div>
            </div>
            <div
              class="customer-nft shadow-blue-100 shadow-lg text-center mt-10 px-6 py-4 mb-4 rounded-xl w-36 flex-shrink-0"
            >
              <div class="-mt-6">
                <img src="/assets/image/Avatar.png" alt="" class="w-16 h-16 mx-auto object-cover -mt-12" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">Ollie Barrett</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
                <a href="#" class="">
                  <button
                    class="block w-20 mx-auto customer-button text-white font-light text-sm capitalize py-1 rounded-full"
                  >
                    follow
                  </button>
                </a>
              </div>
            </div>
            <div
              class="customer-nft shadow-blue-100 shadow-lg text-center mt-10 px-6 py-4 mb-4 rounded-xl w-36 flex-shrink-0"
            >
              <div class="-mt-6">
                <img src="/assets/image/Avatar.png" alt="" class="w-16 h-16 mx-auto object-cover -mt-12" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">Ollie Barrett</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
                <a href="#" class="">
                  <button
                    class="block w-20 mx-auto customer-button text-white font-light text-sm capitalize py-1 rounded-full"
                  >
                    follow
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="">
          <h4 class="text-gray-400 text-base font-normal pt-6  mb-3  px-4">
            • <span class="border-b border-gray-400 pb-1">Collection</span>
          </h4>
          <div class="horizon-scroll overflow-y-auto w-full flex items-center gap-4 px-4 overflow-auto  touch-pan-x">
            <div class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3">
              <div class="">
                <img src="/assets/image/lady.png" alt="" class="w-full h-28 mx-auto object-cover rounded-xl" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3">
              <div class="">
                <img src="/assets/image/lady.png" alt="" class="w-full h-28 mx-auto object-cover rounded-xl" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3">
              <div class="">
                <img src="/assets/image/lady.png" alt="" class="w-full h-28 mx-auto object-cover rounded-xl" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">The Cubes of Destiny</h3>
                <small class="text-gray-400 font-light my-2 w-full block">3.842 ETH</small>
              </div>
            </div>
            <div class="collect-nft shadow-blue-100 shadow-lg text-center mt-10 mb-4 rounded-xl w-72 flex-shrink-0 p-3">
              <div class="">
                <img src="/assets/image/lady.png" alt="" class="w-full h-28 mx-auto object-cover rounded-xl" />
              </div>
              <div class="customer-content">
                <h3 class="text-base font-normal pt-4">The Cubes of Destiny</h3>
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
