import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-profile-following',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 256px;
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
            <div class="mt-1 relative  bg-slate-200 rounded-md py-2 search ">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <!-- Heroicon name: solid/mail -->
                <img src="/assets/image/search.png" alt="" class="w-5 h-5 " />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-slate-200 focus:outline-none block w-full pl-10 pr-4 text-1xl border-gray-300 rounded-md"
                placeholder="Search or enter NFTs…"
              />
            </div>
          </div>
          <div>
            <h2 class="text-1xl font-medium title-font pl-1 dark:text-white text-right">Cancel</h2>
          </div>
        </div>
        <nav class="flex  space-x-4 ml-3 mt-6 ">
          <a
            href="/dashboard"
            class="  font-semibold border-b-2 border-black dark:text-white text-lg  pb-4 px-3 py-2  leading-3"
            >Following</a
          >
          <a href="/team" class="font-medium gray-c px-2 py-2  text-lg rounded-lg leading-3  pb-0">Followers</a>
        </nav>
        <hr class="" />
        <div class="text-sm color px-5 pt-6 ">
          <p>• New Followers</p>
        </div>
        <section class=" flex gap-3  pb-5 overflow-x-auto   body-font">
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" "><img src="/assets/image/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " /></div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">Ollie Barrett</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" "><img src="/assets/image/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " /></div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">Ollie Barrett</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" "><img src="/assets/image/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " /></div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">Ollie Barrett</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="text-sm color px-5 pt-6 ">
          <p>• All Followers</p>
        </div>

        <!-- Scroll Start Point -->
        <div class="scroll-section">
          <div class="flex justify-between items-center px-5 pt-3 pb-3 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/image/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                  <p class="text-xs">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center px-5 pt-3 pb-3 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/image/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                  <p class="text-xs">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center px-5 pt-3 pb-3 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/image/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                  <p class="text-xs">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center px-5 pt-3 pb-3 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/image/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                  <p class="text-xs">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center px-5 pt-3 pb-3 items-center">
            <div class="col-span-2">
              <div class="flex gap-2 items-center">
                <div class="col-start-1 mr-1 col-end-2">
                  <img src="/assets/image/Avatar.png" alt="" class="rounded-full lg:w-10 h-10 mt-2" />
                </div>
                <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                  <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                  <p class="text-xs">Co-Founder / CEO</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
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
export class WebUiMobileProfileFollowingComponent {}
