import { Component } from '@angular/core'
import { empty } from 'rxjs'

@Component({
  selector: 'ui-mobile-profile-following',
  template: `
    <style>
      /* width */
      .scroll-section-vertical {
        height: 299px;
      }
      .scroll-section-horizontal {
        height: 203px;
      }
      .scroll-section-follower {
        height: 546px;
      }
      .scroll-section::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
      .scroll-section {
        overflow-y: scroll;
        scrollbar-color: transparent;
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
        <div class="flex px-5 justify-between items-center gap-4  pb-1">
          <!-- <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon> -->
          <div>
            <div class=" relative  bg-slate-100 rounded-md py-1 search ">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src="/assets/mobile-ui/assets/images/search.png" alt="" class="w-5 h-5 " />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-slate-200 focus:outline-none block w-full text-lg font-normal pl-10 px-4 text-1xl h-12 border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="Search or enter NFTs…"
              />
            </div>
          </div>
          <div>
            <h2 class="text-1xl font-medium title-font pl-1 text-right dark:text-white">Cancel</h2>
          </div>
        </div>
        <nav class="flex  space-x-4 ml-3 mt-6 ">
          <a
            (click)="change_tab()"
            [ngClass]="{ 'border-b-2  border-black dark:border-white ': toggle_tab() == true }"
            href="javascript:void(0)"
            class=" font-semibold dark:text-white text-lg  pb-4 px-3 py-2  leading-3"
            >Following</a
          >
          <a
            (click)="change_tab()"
            [ngClass]="{ 'border-b-2  border-black dark:border-white': toggle_tab() == false }"
            href="javascript:void(0)"
            class=" font-semibold dark:text-white text-lg  pb-4 px-3 py-2  leading-3"
            >Followers</a
          >
        </nav>
        <hr class="border-b dark:border-solid dark:border-1 dark:border-gray-500" />

        <div *ngIf="toggle_tab(); else followerstab">
          <div class="text-sm color px-5 pt-6 text-gray-500 dark:text-indigo-40">
            <p>• New Followers</p>
          </div>
          <section
            class=" dark:bg-gray-900 flex gap-3 pt-5 pb-4 overflow-x-auto body-font scroll-section scroll-section-horizontal"
          >
            <div
              class=" ml-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
            >
              <div class=" justify-items-center  text-center ">
                <div class=" ">
                  <img
                    src="/assets/mobile-ui/assets/images/Avatar.png"
                    alt=""
                    class="rounded-full mx-auto w-16 h-16 "
                    style="margin-top: -50px;"
                  />
                </div>
                <div class="text-base mt-2 ml-1">
                  <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                  <p class="text-xs dark:text-white">3.842 ETH</p>
                </div>
                <div>
                  <button
                    class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white
                  "
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
            >
              <div class=" justify-items-center  text-center ">
                <div class=" ">
                  <img
                    src="/assets/mobile-ui/assets/images/Avatar.png"
                    alt=""
                    class="rounded-full mx-auto w-16 h-16 "
                    style="margin-top: -50px;"
                  />
                </div>
                <div class="text-base  mt-2 ml-1">
                  <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                  <p class="text-xs dark:text-white">3.842 ETH</p>
                </div>
                <div>
                  <button
                    class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div
              class="mr-3 flex-none first:pl-6 last:pr-6 px-5 pt-4 mt-6 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg dark:bg-gray-700"
            >
              <div class="justify-items-center text-center ">
                <div class="">
                  <img
                    src="/assets/mobile-ui/assets/images/Avatar.png"
                    alt=""
                    class="rounded-full mx-auto w-16 h-16 "
                    style="margin-top: -50px;"
                  />
                </div>
                <div class="text-base  mt-2 ml-1">
                  <h3 class="font-normal text-base dark:text-white">Ollie Barrett</h3>
                  <p class="text-xs dark:text-white">3.842 ETH</p>
                </div>
                <div>
                  <button
                    class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600
                  border dark:border-white"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div class="text-sm color px-5 pt-6 text-gray-500 dark:text-indigo-40">
            <p>• All Followers</p>
          </div>

          <!-- Scroll Start Point -->
          <div class="scroll-section scroll-section-vertical">
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
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
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
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
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
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
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
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
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
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
        <ng-template #followerstab>
          <div class="text-sm color px-5 pt-6 text-gray-500 dark:text-indigo-40">
            <p>• All Followers</p>
          </div>

          <!-- Scroll Start Point -->
          <div class="scroll-section scroll-section-follower">
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="w-full rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 focus:outline-none hover:bg-indigo-600 border dark:border-white"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
            <div class="flex justify-between px-5 pt-3 pb-3 items-center">
              <div class="col-span-2">
                <div class="flex gap-2 items-center">
                  <div class="col-start-1 mr-1 col-end-2">
                    <img
                      src="/assets/mobile-ui/assets/images/Avatar.png"
                      alt=""
                      class="rounded-full lg:w-10 h-10 mt-2"
                    />
                  </div>
                  <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                    <h3 class="font-semibold text-1x1 dark:text-white">Leslie Alexander</h3>
                    <p class="text-xs text-gray-500 dark:text-indigo-400">Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class=" rounded-full text-white bg-indigo-500 text-xs py-1.5 px-3 mt-2 focus:outline-none hover:bg-indigo-600"
                >
                  Unfollow
                </button>
              </div>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
    <!-- <button class=" ml-10 mt-10 border border-solid border-gray-600" (click)="testingDataFunction(this.items)">Test</button> -->
  `,
})
export class WebUiMobileProfileFollowingComponent {
  follower = true
  // action button toggle
  toggle_tab() {
    return this.follower
  }

  change_tab() {
    if (this.follower) {
      this.follower = false
    } else {
      this.follower = true
    }
  }
}
