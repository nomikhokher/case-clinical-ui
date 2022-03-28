import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-nft-preview',
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
    <div class="mx-auto bg-gray-200 mt-4">
      <div class="bg-white dark:bg-gray-600">
        <div
          class="pt-8 pb-4 flex px-5 justify-between items-center gap-4 border-b dark:border-solid dark:border-2 dark:border-gray-500"
        >
          <ui-icon size="lg" icon="chevronLeft" class="w-8 dark:text-white"></ui-icon>
          <div>
            <h2 class="text-2xl font-medium title-font pl-1 dark:text-white">Create an NFT</h2>
          </div>
          <div></div>
        </div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="scroll-section">
          <img
            alt="content"
            class="object-cover object-center px-5 mt-5 w-full"
            src="/assets/mobile-ui/assets/images/ntf-img.png"
          />

          <div class="mx-5 mt-4 mb-2 py-4 rounded-md pro-box px-3 dark:bg-gray-700">
            <div class="col-start-1 col-end-7">
              <label class="block">
                <span class=" text-sm font-medium dark:text-white "> Original artwork title </span>
                <p class="mt-1 focus:outline-none  border-0 block w-full text-sm focus:ring-0">Minimilistic</p>
              </label>
            </div>
          </div>

          <div class="px-3 mx-5 mt-4 py-2 rounded-md pro-box dark:bg-gray-700">
            <div class="col-start-1 col-end-7">
              <label class="block">
                <span class=" text-sm font-medium dark:text-white "> Description </span>
                <p class=" border-0 resize-none bg-transparent focus:outline-none block w-full text-sm ">
                  That feeling when you get thought
                </p>
              </label>
            </div>
          </div>

          <nav class="flex 9 space-x-4 ml-3 mt-3">
            <a
              (click)="swith_tab('fix')"
              href="javascript:void(0)"
              [ngClass]="{ 'border-b-2  border-black dark:border-white': active_tab() == 'fix' }"
              class="font-medium dark:text-white text-lg  pb-4 px-3 py-2  leading-3 "
              >Fix Price</a
            >
            <a
              (click)="swith_tab('auction')"
              [ngClass]="{ 'border-b-2  border-black dark:border-white': active_tab() == 'auction' }"
              href="javascript:void(0)"
              class="  font-semibold  dark:text-white text-lg  pb-4 px-3 py-2  leading-3"
              >Auction</a
            >
          </nav>
          <hr class="" />
          <div class=" flex  gap-2 mx-5">
            <div class=" pro-box   my-7 py-5  rounded-md pro-box dark:bg-gray-700 px-3">
              <label class="flex gap-4">
                <div>
                  <span class=" text-sm  dark:text-white font-medium"> Token </span>
                  <p class="mt-1  w-12 block focus:outline-none  border-0   text-sm focus:ring-0">ETH</p>
                </div>
              </label>
            </div>
            <div class="    my-7 py-5 rounded-md pro-box dark:bg-gray-700 px-3">
              <div class="">
                <label class="block">
                  <span class=" text-sm  dark:text-white font-medium"> Minimum bid </span>
                  <p class="mt-1 focus:outline-none  border-0 block w-full text-sm focus:ring-0">Enter Minimum bid</p>
                </label>
              </div>
            </div>
          </div>
          <p *ngIf="active_tab() == 'fix'" class="px-6 text-sm color my-4 text-gray-500 dark:text-gray-400">
            Service fee 2.5%. You will receive 0.488 ETH
          </p>
          <div *ngIf="active_tab() == 'auction'">
            <div class=" flex  mx-5">
              <div class=" pro-box  w-full   py-5 rounded-md pro-box dark:bg-gray-700 px-3">
                <label class="flex gap-4">
                  <div class="text-left">
                    <span class=" text-sm float-left  dark:text-white font-medium"> Starting Date </span>
                    <p class="mt-1  w-full block focus:outline-none  border-0   text-sm focus:ring-0">
                      Right After Listing
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div class=" flex  mx-5">
              <div class=" pro-box  w-full mt-6   py-5 rounded-md pro-box dark:bg-gray-700 px-3">
                <label class="flex gap-4">
                  <div class="text-left">
                    <span class=" text-sm float-left  dark:text-white font-medium"> Starting Date </span>
                    <p class="mt-1  w-full block focus:outline-none  border-0   text-sm focus:ring-0">
                      Right After Listing
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <p class="px-6 text-sm color my-4 text-gray-500 dark:text-gray-400">
              Any bid placed in the last 10 minutes extends the auction by 10 minutes Learn more
            </p>
          </div>
          <div class="   btn ">
            <div class="mr-4 absolute inset-x-0 bottom-0 ">
              <hr class="mt-24 mb-5  dark:border-solid dark:border-2 dark:border-gray-500 w-full" />
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
  `,
})
export class WebUiMobileNftPreviewComponent {
  showtab = 'fix'
  swith_tab(param) {
    this.showtab = param
  }

  active_tab() {
    return this.showtab
  }
}
