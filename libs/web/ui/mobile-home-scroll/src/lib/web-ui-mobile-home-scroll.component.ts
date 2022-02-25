import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-home-scroll',
  template: `
    <section class="bg-white h-screen">
      <div class="flex justify-between border-b border-slate-100 mt-7 pb-2 px-4 ">
        <div>
          <h1 class="text-2xl font-bold ">Home NFT</h1>
        </div>
        <div>
          <a href=""
            ><img
              _ngcontent-bsr-c21=""
              src="/assets/mobile-ui/assets/images/plus-icon.png"
              alt=""
              id=""
              class="w-full w-7"
          /></a>
        </div>
      </div>
      <div class="mt-6 px-5">
        <div class="">
          <img
            src="/assets/mobile-ui/assets/images/home-scroll-img.png"
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
    </section>

    <!-- <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>ui-mobile-home-scroll</code>
      </div>
    </div> -->
  `,
})
export class WebUiMobileHomeScrollComponent {}
