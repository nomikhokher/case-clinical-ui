import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-search',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 709px;
        overflow-y: scroll;
        scrollbar-color: white;
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
    <div class="relative">
      <section class="bg-white absolute top-0 w-full dark:bg-gray-600">
        <div class="w-full pt-8 pb-4 px-4 dark:text-white">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 dark:text-white"
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
            <input
              type="text"
              name="Allsearch"
              id=""
              class="rounded-lg w-full py-3 dark:border-white pl-12 pr-4 text-lg font-normal border-2 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500 border-gray-300  dark:bg-gray-700 dark:text-white bg-slate-200"
              placeholder="Search or enter NFTs..."
            />
          </div>
        </div>
      </section>
      <!-- Scroll Start Point -->
      <div class="scroll-section">
        <section class="pt-28 pb-0">
          <div class="w-full flex gap-x-2 justify-center items-center px-6">
            <div class="flex-shrink-0 w-6/12">
              <a href=""
                ><img
                  class="mb-2 w-full rounded-lg h-48 object-cover"
                  src="/assets/mobile-ui/assets/images/whiteLion.png"
                  alt=""
              /></a>
              <a href=""
                ><img
                  class="mb-2 w-full rounded-lg h-36 object-cover"
                  src="/assets/mobile-ui/assets/images/lady.png"
                  alt=""
              /></a>
            </div>
            <div class="flex-shrink-0 w-6/12">
              <a href=""
                ><img
                  class="mb-2 w-full rounded-lg h-36 object-cover"
                  src="/assets/mobile-ui/assets/images/persons.png"
                  alt=""
              /></a>
              <a href=""
                ><img
                  class="mb-2 w-full rounded-lg h-48 object-cover"
                  src="/assets/mobile-ui/assets/images/lady2.png"
                  alt=""
              /></a>
            </div>
          </div>
          <div class="w-full px-4 pb-4">
            <a href=""
              ><img
                class="mb-2 w-full rounded-lg h-48 object-cover"
                src="/assets/mobile-ui/assets/images/painting.png"
                alt=""
            /></a>
          </div>
          <div class="w-full px-4 pb-4">
            <a href=""
              ><img
                class="mb-2 w-full rounded-lg h-100 object-cover"
                src="/assets/mobile-ui/assets/images/g3.png"
                alt=""
            /></a>
          </div>
        </section>
      </div>
      <section>
        <div
          class="w-full flex justify-between items-center pt-4 px-4 border-t mt-0 pb-2 dark:bg-gray-900 dark:border-solid dark:border-2 dark:border-gray-500"
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
export class WebUiMobileSearchComponent {}

// for(var i=0;i<5;i++){
// setTimeout(() => {
//   console.log(i);
// }, 1000);
// }
