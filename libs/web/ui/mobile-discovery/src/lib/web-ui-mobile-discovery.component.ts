import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-discovery',
  template: `
    <style>
      .likeImgBig {
        position: static;
        animation-name: shakeAnim;
        animation-duration: 4s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        bottom: 325px;
        left: 184px;
      }
      .likeImgBig:hover {
        animation-name: shakeAnim;
      }

      @keyframes shakeAnim {
        0% {
          left: 184px;
        }
        1% {
          left: 177px;
        }
        2% {
          left: 184px;
        }
        3% {
          left: 177px;
        }
        4% {
          left: 184px;
        }
        5% {
          left: 177px;
        }
        6% {
          left: 184px;
        }
        7% {
          left: 184px;
        }
      }
    </style>
    <div class="relative">
      <!-- Header -->
      <section class="absolute w-full">
        <div class="flex justify-between px-4 pt-16">
          <div class="">
            <h1 class="text-2xl font-bold text-white">Discovery</h1>
          </div>
          <div class="">
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
        </div>
      </section>
      <!-- Header End-->

      <!-- Main -->
      <section>
        <div class=" ">
          <img
            src="/assets/mobile-ui/assets/images/girlFull.png"
            alt=""
            class="w-full object-cover "
            style="height:709px;"
          />
        </div>

        <!--LIKED HEART-->
        <div *ngIf="isLiked()" class="">
          <img
            src="/assets/mobile-ui/assets/images/BigHeart.png"
            alt=""
            class="w-24 object-cover  absolute  likeImgBig"
          />
        </div>
        <!--LIKED HEART END-->

        <!--User Detail-->
        <div class="absolute bottom-28 px-4 w-full">
          <div class="flex w-full gap-2 items-center">
            <div class="">
              <img
                src="/assets/mobile-ui/assets/images/DiscoveryUser.png"
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div class="text-white">
              <small class="text-xs">Creator</small>
              <p class="text-base font-bold">
                Minnie • <span class=""><a href="#" class="">Follow</a></span>
              </p>
            </div>
          </div>
          <div class="text-white">
            <h1 class="text-2xl font-bold pt-4">Sugar Rush</h1>
            <p class="text-base font-normal pt-3 pb-4">Sugar rush is the final design from my dream…</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="bg-white py-1.5 px-4 rounded-3xl text-black font-medium">
              <h2>⏳ 1h 28m 11s</h2>
            </div>
            <div class="flex items-center gap-4 text-white">
              <a href="javascript:void(0)">
                <img
                  *ngIf="isLiked(); else unlikeImage"
                  (click)="toggle_like()"
                  src="/assets/mobile-ui/assets/images/Filled.png"
                  alt=""
                  id=""
                  class="w-full h-full"
                />
                <ng-template #unlikeImage>
                  <svg
                    (click)="toggle_like()"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.55722 1.15602C1.79457 2.69122 -0.320178 7.87664 1.2609 12.8129C2.15235 15.5874 4.16261 18.2101 6.94506 20.6674C8.25181 21.8214 9.64682 22.8643 11.0419 23.781C11.2373 23.9095 11.4274 24.0318 11.6113 24.1479L12.1437 24.4774L12.7683 24.8451L12.929 24.9347C13.3028 25.1382 13.7544 25.1374 14.1276 24.9328L14.3943 24.7813L14.6593 24.6253L15.1697 24.3146C15.435 24.1497 15.7149 23.9708 16.007 23.7783C17.397 22.8622 18.787 21.8231 20.089 20.677C22.9026 18.2003 24.9232 15.5715 25.7928 12.8066C27.3697 7.87882 25.2462 2.69029 20.4859 1.15677L20.2045 1.07211C18.0369 0.462571 15.6378 0.760208 13.7169 1.83415L13.52 1.94879C11.4279 0.706185 8.89586 0.407711 6.55722 1.15602ZM12.7775 4.45386C13.2273 4.79054 13.8465 4.78568 14.2911 4.44198C15.7465 3.31668 17.8898 2.94927 19.7207 3.53678C23.0671 4.61482 24.5948 8.34761 23.4098 12.0507C22.7002 14.307 20.9392 16.598 18.4372 18.8004C17.2295 19.8635 15.9304 20.8347 14.6313 21.6909L14.3628 21.8661C14.1866 21.98 14.0161 22.0881 13.852 22.1901L13.524 22.3898L13.1959 22.1903L12.6839 21.8669C12.5956 21.81 12.5059 21.7516 12.4148 21.6918C11.1127 20.8361 9.81053 19.8626 8.59992 18.7935C6.12426 16.6072 4.37088 14.3196 3.64141 12.0493C2.4546 8.34391 3.97537 4.61493 7.32166 3.53628C9.17974 2.94174 11.2134 3.28331 12.7775 4.45386Z"
                      fill="white"
                    />
                  </svg>
                </ng-template>
              </a>
              <a href="javascript:void(0)" (click)="toggle_pop()">
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

      <!-- Footer -->
      <section>
        <div
          class="w-full flex justify-between items-center pt-3 px-4 border-t mt-0 pb-2 dark:bg-gray-900 dark:border-solid dark:border-2 dark:border-gray-500"
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
            <a href=""
              ><img src="/assets/mobile-ui/assets/images/compass.png" alt="" id="" class="object-contain w-full h-8" />
              <img
                src="/assets/mobile-ui/assets/images/compass.png"
                alt=""
                id=""
                class="object-contain w-full h-8 hidden"
                style="filter: invert(1);"
              />
            </a>
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
      <!-- Footer End -->

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
            <div class="text-center relative">
              <p (click)="toggle_pop()" class="absolute right-3 -top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
              <a href="" class="text-base leading-6 font-medium text-gray-900 block pb-4 border-b" id="modal-title"
                >Share</a
              >
              <a href="" class="text-base leading-6 font-medium text-gray-900 block py-4 border-b" id="modal-title"
                >Report</a
              >
              <a
                (click)="toggle_pop()"
                href="javascript:void(0)"
                class="text-base leading-6 font-medium text-gray-900 block pt-4"
                id="modal-title"
                >Cancel</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--POPUP MODAL END-->
    </div>
  `,
})
export class WebUiMobileDiscoveryComponent {
  show = false
  like = false

  // action button toggle
  toggle_pop() {
    if (this.show) {
      this.show = false
    } else {
      this.show = true
    }
  }

  // action button toggle
  toggle_like() {
    if (this.like) {
      this.like = false
    } else {
      this.like = true
    }
  }

  //check if its liked
  isLiked() {
    return this.like
  }
}
