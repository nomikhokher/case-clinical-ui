import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-detail',
  template: `
    <style>
      .gray-c {
        color: #8e8e93;
      }
      .btn button {
        height: 56px;
        background-color: #0066ff;
      }
      .create-button {
        background-color: #0066ff;
      }
      .hoverBorder:hover {
        border-bottom-width: 2px;
      }
    </style>
    <div class="relative ">
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
              <img src="/assets/mobile-ui/assets/images/heart.png" alt="" class="w-full h-6" />
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
          <img src="/assets/mobile-ui/assets/images/detailGirl.png" alt="" class="w-full h-96 object-fill" />
        </div>
        <!--User Detail-->
        <div class=" w-full ">
          <div
            class="flex gap-6 font-medium items-center text-lg  relative px-4 border-b dark:border-solid dark:border-2 dark:border-gray-500 w-full"
          >
            <a
              (click)="toggle_pop('fix')"
              href="javascript:void(0)"
              [ngClass]="{ 'border-b-2  border-black dark:border-white': active_tab() == 'fix' }"
              class="font-medium dark:text-white text-lg  pb-4 px-3 py-2  leading-3 "
              >Fix Price</a
            >
            <a
              (click)="toggle_pop('auction')"
              [ngClass]="{ 'border-b-2  border-black dark:border-white': active_tab() == 'auction' }"
              href="javascript:void(0)"
              class="  font-semibold  dark:text-white text-lg  pb-4 px-3 py-2  leading-3"
              >Auction</a
            >

            <a
              href=""
              class="text-gray-900 dark:text-white border-black border-b-2  hover:border-black dark:border-white hoverBorder  py-2"
              >Information</a
            >
            <a href="" class="text-gray-400 dark:text-white   hover:border-black dark:border-white hoverBorder py-2"
              >Activity</a
            >
            <div class="bg-white py-2 px-3 rounded-3xl text-black font-medium absolute right-3 -top-5 text-sm">
              <h2>⏳ 1h 28m 11s</h2>
            </div>
          </div>

          <div class="flex w-full gap-2 items-center my-6 px-4">
            <div class="">
              <img
                src="/assets/mobile-ui/assets/images/DiscoveryUser.png"
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div class="dark:text-white">
              <small class="text-xs">Creator</small>
              <p class="text-base font-bold">
                Minnie • <span class=""><a href="#" class="">Follow</a></span>
              </p>
            </div>
          </div>
          <div class="px-4">
            <h1 class="text-2xl font-bold pt-2 dark:text-white">Sugar Rush</h1>
            <h2 class="font-normal text-base dark:text-white pt-4 uppercase">DESCRIPTION</h2>
            <p class="text-base font-normal pt-3 pb-4 text-gray-400">
              Sugar rush is the final design from my dream vs. reality collection. I am a heavy candy …
            </p>
          </div>
          <div class=" border-t dark:border-solid dark:border-2 dark:border-gray-500 w-full pt-3">
            <div class="px-4 flex items-center justify-between">
              <div class="">
                <h2 class="font-normal text-base text-gray-400 uppercase">Current Bid</h2>
                <h2 class="text-2xl font-bold dark:text-white">0.80 ETH</h2>
              </div>
              <div class="">
                <a
                  href="javascript:void(0)"
                  (click)="toggle_pop()"
                  class="create-button text-white font-medium text-base h-12 rounded-full flex justify-center items-center px-6"
                  >Place a Bid</a
                >
              </div>
            </div>
          </div>
        </div>
        <!--User Detail End-->
      </section>
      <!-- Main End -->

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
        .g-color {
          color: #8e8e93;
        }
      </style>
      <!--POPUP MODAL-->
      <div
        *ngIf="show"
        class="absolute z-10 inset-0 overflow-hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class=" min-h-screen px-4 text-center">
          <div class="absolute inset-0 bg-black bg-opacity-60 transition-opacity" aria-hidden="true"></div>
          <span class="sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="relative inline-block align-bottom bg-white rounded-lg py-6 text-left w-full  mb-44">
            <div class="bg-white  relative">
              <div class="flex head-cl px-5 justify-between items-center gap-4 pb-2 border-b">
                <ui-icon (click)="toggle_pop()" size="lg" icon="chevronLeft" class="w-8 dark:text-white"></ui-icon>
                <div>
                  <h2 class="text-2xl font-medium title-font  text-gray-900">Place a Bid</h2>
                </div>
                <div></div>
              </div>
              <!-- This example requires Tailwind CSS v2.0+ -->

              <div class=" flex   pt-5 gap-7  mx-5">
                <div class=" ">
                  <img src="/assets/mobile-ui/assets/images/mask-img.png" alt="" id="" class="w-full " />
                </div>
                <div class="mt-5 ">
                  <p class="text-sm font-norma g-color pb-2 pl-3">⏳ 1h 28m 11s</p>
                  <h3 class="text-xl font-bold">Sugar Rush</h3>
                  <p class="text-sm font-normal g-color">You must bid at least <br />0.825 ETH</p>
                </div>
              </div>

              <div class="  items-center ">
                <div class=" flex  gap-2 mx-5">
                  <div class=" pro-box   my-7 py-5 rounded-md pro-box px-3">
                    <label class="flex gap-4">
                      <div>
                        <span class=" text-sm text-black font-medium"> Token </span>
                        <input
                          type="text"
                          name="text"
                          class="mt-1  w-12 block focus:outline-none  border-0   text-sm focus:ring-0"
                          placeholder="ETH"
                        />
                      </div>
                      <img
                        class=" rounded-full w-8 h-8 text-right"
                        src="/assets/mobile-ui/assets/images/btn-select.png"
                        alt=""
                      />
                    </label>
                  </div>
                  <div class="    my-7 py-5 rounded-md pro-box px-3">
                    <div class="">
                      <label class="block">
                        <span class=" text-sm text-black font-medium"> Minimum bid </span>
                        <input
                          type="text"
                          name="text"
                          class="mt-1 focus:outline-none  border-0 block w-full text-sm focus:ring-0"
                          placeholder="Enter Minimum bid"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="   btn">
                  <div class="mr-4  inset-x-0 bottom-0 ">
                    <hr class="mb-3" />
                    <div class="flex justify-center mb-4">
                      <button class="w-full rounded-full text-white   py-2  mx-5 px-6 focus:outline-none   text-lg">
                        Create Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--POPUP MODAL END-->
      </div>
    </div>
  `,
})
export class WebUiMobileDetailComponent {
  show = false

  // action button toggle
  toggle_pop() {
    if (this.show) {
      this.show = false
    } else {
      this.show = true
    }
  }
}
