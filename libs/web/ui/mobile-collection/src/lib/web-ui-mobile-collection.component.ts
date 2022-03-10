import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-collection',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 633px;
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
        <div class="flex px-5 justify-between items-center gap-4 border-b">
          <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon>
          <div>
            <h2 class="text-2xl font-medium title-font pl-1 dark:text-white">Choose Collection</h2>
          </div>
          <a href="#">
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
          </a>
        </div>
        <div class="scroll-section">
          <section class=" body-font">
            <div class=" px-5 pt-4 pb-5 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:text-white">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class=" mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="/assets/mobile-ui/assets/images/img1.png"
                    />
                  </div>
                  <h2 class="title-font text-base font-bold font-medium dark:text-white mt-2 ">The Cubes of Destiny</h2>
                  <p class="leading-relaxed dark:text-blue-300">ERC-1155</p>
                </div>
              </div>
            </div>
            <div class=" px-5 pt-4 mt-5 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg ">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class=" mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="/assets/mobile-ui/assets/images/img2.png"
                    />
                  </div>
                  <h2 class="title-font text-base font-bold font-medium dark:text-white mt-2 ">The Cubes of Destiny</h2>
                  <p class="leading-relaxed dark:text-blue-300">ERC-1155</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileCollectionComponent {}
