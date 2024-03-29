import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-nft-complete',
  template: `
    <style>
      .border-b {
        border-bottom: 1px solid #e1e1e1;
      }

      .pro-box {
        background-color: #f6f6f6;
      }
      .pro-box span {
        font-size: 15px;
        line-height: 21px;
      }

      .pro-box input {
        font-size: 16px;
        line-height: 24px;
        border: none;
        background: transparent;
        color: #8e8e93;
      }
      .btn button {
        height: 56px;
        background-color: #0066ff;
      }

      .bg-c {
        background-color: #0066ff;
      }
      .pro-box p {
        color: #8e8e93;
      }
    </style>
    <style>
      /* width */
      .scroll-section::-webkit-scrollbar {
        width: 0px;
      }
      .scroll-section {
        height: 571px;
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
    <div class="mx-auto bg-gray-200 ">
      <div class="bg-white dark:bg-gray-600">
        <section class="">
          <div class="text-center">
            <h1 class="text-4xl font-bold dark:text-white pt-12">Congratulations!</h1>
            <p class="text-gray-400 font-normal text-base  py-4">
              The Punk Collection - STAINS <br />
              listed for sale successfully!
            </p>
          </div>
          <div class="">
            <div class="px-5">
              <img
                src="/assets/mobile-ui/assets/images/congratsImage.png"
                alt=""
                class=" w-full object-cover rounded-lg  "
              />
            </div>
            <div class="shadow-blue-100 shadow-xl  rounded-br-xl rounded-bl-xl">
              <div class="shadow-blue-100 shadow-xl px-8 py-4 ">
                <div class="flex justify-between items-center">
                  <div class="bg-gray-100 py-1.5 px-4 rounded-3xl text-gray-900 font-medium">
                    <h2>⏳ 1h 28m 11s</h2>
                  </div>
                  <div class="flex items-center gap-4 dark:text-white">
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
                <h2 class="text-3xl font-bold dark:text-white pt-4">Minimalistic</h2>
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
                  <div class="dark:text-white">
                    <small class="text-xs text-gray-400">Creator</small>
                    <p class="text-base font-bold">Kevin</p>
                  </div>
                </div>
                <div class="flex w-full gap-2 items-center justify-end">
                  <div class="py-2 px-3 bg-gray-100 rounded-full">
                    <img
                      src="/assets/mobile-ui/assets/images/ethereumCurr.png"
                      alt=""
                      class="w-full h-7 rounded-full"
                    />
                  </div>
                  <div class="dark:text-white">
                    <small class="text-xs text-gray-400">Reserve price</small>
                    <p class="text-base font-bold">0.32 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="   btn ">
            <div class="mr-0 absolute inset-x-0 bottom-0">
              <hr class="mt-24 mb-5  dark:border-solid dark:border-2 dark:border-gray-500 w-full" />
              <div class="flex justify-center mb-4">
                <button class="w-full rounded-full text-white   py-2  mx-5 px-6 focus:outline-none   text-lg">
                  View Item
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class WebUiMobileNftCompleteComponent {}
