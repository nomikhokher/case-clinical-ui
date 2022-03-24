import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-detail',
  template: `
    <div class="relative bg-white h-screen">
      <!-- Header -->
      <section class="absolute w-full">
        <div class="flex justify-between px-4 pt-16 text-white">
          <a href="" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
            </svg>
          </a>

          <div class="flex items-center gap-4">
            <a href="" class="">
              <img src="/assets/image/Heart.png" alt="" class="w-full h-6" />
            </a>
            <a href="" class="">
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
      </section>
      <!-- Header End-->

      <!-- Main -->
      <section>
        <div class="w-full">
          <img src="/assets/image/detailGirl.png" alt="" class="w-full h-96 object-fill" />
        </div>
        <!--User Detail-->
        <div class=" w-full ">
          <div class="flex gap-6 font-medium items-center text-lg  relative px-4 border-b border-gray-200">
            <a href="" class="text-black border-b-2 border-black py-2">Information</a>
            <a href="" class="text-gray-400 border-b-2 border-white hover:border-black hover:text-black py-2"
              >Activity</a
            >
            <div class="bg-white py-2 px-3 rounded-3xl text-black font-medium absolute right-3 -top-5 text-sm">
              <h2>⏳ 1h 28m 11s</h2>
            </div>
          </div>
          <div class="flex w-full gap-2 items-center my-6 px-4">
            <div class="">
              <img src="/assets/image/DiscoveryUser.png" alt="" class="w-10 h-10 object-cover rounded-full" />
            </div>
            <div class="text-black">
              <small class="text-xs">Creator</small>
              <p class="text-base font-bold">
                Minnie • <span class=""><a href="#" class="">Follow</a></span>
              </p>
            </div>
          </div>
          <div class="px-4">
            <h1 class="text-2xl font-bold pt-4 text-black">Sugar Rush</h1>
            <h2 class="font-normal text-base text-black pt-4 uppercase">DESCRIPTION</h2>
            <p class="text-base font-normal pt-3 pb-4 text-gray-400">
              Sugar rush is the final design from my dream vs. reality collection. I am a heavy candy …
            </p>
          </div>
          <div class=" border-t border-gray-200 pt-4">
            <div class="px-4 flex items-center justify-between">
              <div class="">
                <h2 class="font-normal text-base text-gray-400 uppercase">Current Bid</h2>
                <h2 class="text-2xl font-bold text-black">0.80 ETH</h2>
              </div>
              <div class="">
                <a
                  href="#"
                  class="create-button text-white font-medium text-base h-14 rounded-full flex justify-center items-center px-6"
                  >Place a Bid</a
                >
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4">
            <div class="flex items-center gap-4 text-white">
              <a href=""><img src="/assets/image/Heart.png" alt="" id="" class="w-full h-full" /></a>
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
        </div>
        <!--User Detail End-->
      </section>
      <!-- Main End -->
    </div>
  `,
})
export class WebUiMobileDetailComponent {}
