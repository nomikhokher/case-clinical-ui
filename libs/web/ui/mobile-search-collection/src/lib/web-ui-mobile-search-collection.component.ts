import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-search-collection',
  template: `
    <style>
      /* width */
      .scroll-section-vertical {
        height: 604px;
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
                ><p class="pb-2 text-gray-400 dark:text-white   hover:border-black dark:border-white hoverBorder">
                  Artworks
                </p></a
              >
            </div>
            <div class="flex-shrink-0  h-10">
              <a href="dev/mobile-search-collection"
                ><p
                  class="pb-2 text-gray-400 dark:text-white border-black border-b-2  hover:border-black dark:border-white hoverBorder"
                >
                  Collection
                </p></a
              >
            </div>
          </div>
        </section>
        <section class="scroll-section scroll-section-vertical ">
          <section class=" body-font">
            <div
              class=" px-5 pt-4 pb-5 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:text-white dark:bg-gray-700"
            >
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class=" mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="/assets/mobile-ui/assets/images/img1.png"
                    />
                  </div>
                  <h2 class="title-font text-base font-bold dark:text-white mt-2 ">The Cubes of Destiny</h2>
                  <p class="leading-relaxed dark:text-blue-300">ERC-1155</p>
                </div>
              </div>
            </div>
            <div class=" px-5 pt-4 mt-5 pb-3 mx-auto shadow-lg shadow-blue-500/20  rounded-lg dark:bg-gray-700">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class=" mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="/assets/mobile-ui/assets/images/img2.png"
                    />
                  </div>
                  <h2 class="title-font text-base font-bold dark:text-white mt-2 ">The Cubes of Destiny</h2>
                  <p class="leading-relaxed dark:text-blue-300">ERC-1155</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  `,
})
export class WebUiMobileSearchCollectionComponent {}
