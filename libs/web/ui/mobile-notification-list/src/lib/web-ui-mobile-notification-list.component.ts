import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-notification-list',
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
          <!-- <div ><i  class="fa fa-angle-left fa-solid fa-2x py-1"></i></div> -->
          <div>
            <h2 class="text-2xl font-medium title-font  dark:text-white">Notification List</h2>
          </div>
          <img
            src="/assets/mobile-ui/assets/images/notification.png"
            alt=""
            class="w-7 h-7 text-right border-solid border-2 border-black rounded-lg dark:text-white border-b dark:border-solid dark:border-2 dark:border-white"
          />
        </div>
        <hr class="dark:border-t dark:border-solid dark:border-2 dark:border-gray-600" />
        <!-- Scroll Start Point -->
        <div class="scroll-section">
          <div class="flex justify-between px-5 pt-4 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/mobile-ui/assets/images/v-img.png" alt="" class=" w-10 h-10 mt-2" />
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/mobile-ui/assets/images/v-img.png" alt="" class=" w-10 h-10 mt-2" />
            </div>
          </div>
          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/mobile-ui/assets/images/v-img.png" alt="" class=" w-10 h-10 mt-2" />
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>

          <div class="flex justify-between px-5 pt-8 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                  <p class="text-xs dark:text-white">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
        </div>

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
export class WebUiMobileNotificationListComponent {}
