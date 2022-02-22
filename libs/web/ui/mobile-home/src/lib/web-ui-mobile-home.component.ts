import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-home',
  template: `
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: auto;
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
    <div class="mx-auto mt-2 bg-white">
      <div class="bg-white pt-8">
        <div class="flex px-5 justify-between items-center gap-4  pb-1">
          <div>
            <div class="mt-1 relative  bg-slate-200 rounded-md py-2 search ">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <!-- Heroicon name: solid/mail -->
                <img src="/assets/mobile-ui/assets/images/search.png" alt="" class="w-5 h-5 " />
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
            <h2 class="text-1xl font-medium title-font pl-1 text-gray-900 text-right">Cancel</h2>
          </div>
        </div>

        <hr class="" />
        <div class="text-sm color px-5 pt-4">
          <p>• New Followers</p>
        </div>

        <section class=" flex gap-3  pb-4 overflow-x-auto  body-font scroll-section">
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " />
              </div>
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
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " />
              </div>
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
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full mx-auto w-16 h-16 " />
              </div>
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

        <div class="text-sm color px-5 pt-0 pb-4">
          <p>• Top Collection</p>
        </div>
        <section class=" flex gap-3  pb-4 overflow-x-auto  body-font scroll-section">
          <div
            class=" flex-none  first:pl-3 last:pr-3 px-2 pt-0 mt-2 pb-0 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full  " />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">The Cubes of Destiny</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-2 pt-0 mt-2 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full  " />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">The Cubes of Destiny</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
          <div
            class=" flex-none  first:pl-6 last:pr-6 px-2 pt-0 mt-2 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg "
          >
            <div class=" justify-items-center  text-center ">
              <div class=" ">
                <img src="/assets/mobile-ui/assets/images/img1.png" alt="" class=" mx-auto w-full  " />
              </div>
              <div class="text-base  mt-2 ml-1">
                <h3 class="font-normal text-base ">The Cubes of Destiny</h3>
                <p class="text-xs">3.842 ETH</p>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div class="w-full flex justify-between items-center pt-3 px-4 border-t ">
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/home.png" alt="" id="" class="w-full h-8" /></a>
          </div>
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/search.png" alt="" id="" class="w-full h-8  " /></a>
          </div>
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/compass.png" alt="" id="" class="w-full h-8 " /></a>
          </div>
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/notify.png" alt="" id="" class="w-full h-8 " /></a>
          </div>
          <div class="flex-shrink-0">
            <a href=""><img src="/assets/mobile-ui/assets/images/pro-img.png" alt="" id="" class="w-full h-8 " /></a>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class WebUiMobileHomeComponent {}
