import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-search-artwork',
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
              <a href="dev/mobile-search-artwork"
                ><p class="pb-2 text-gray-400 dark:text-white   hover:border-black dark:border-white hoverBorder">
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
              <a href="dev/mobile-search-artwork"
                ><p
                  class="pb-2 text-gray-400 dark:text-white border-black border-b-2  hover:border-black dark:border-white hoverBorder"
                >
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

        <div class="mt-6">
          <div class="">
            <img
              src="/assets/mobile-ui/assets/images/search-art-img.png"
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
                    ><img src="/assets/mobile-ui/assets/images/BlackHeart.png" alt="" id="" class="w-full h-full"
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
                  <img src="/assets/mobile-ui/assets/images/ethereumCurr.png" alt="" class="w-full h-7 rounded-full" />
                </div>
                <div class="text-black">
                  <small class="text-xs text-gray-400">Reserve price</small>
                  <p class="text-base font-bold">0.32 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileSearchArtworkComponent {}
