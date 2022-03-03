import { Component } from '@angular/core'

@Component({
  selector: 'ui-notification-list',
  template: `
    <div class="mx-auto mt-2 bg-white h-screen ">
      <div class="bg-white pt-8">
        <div class="flex px-5 justify-between items-center gap-4 border-b">
          <!-- <div ><i  class="fa fa-angle-left fa-solid fa-2x py-1"></i></div> -->
          <div>
            <h2 class="text-2xl font-medium title-font  text-gray-900">Notification List</h2>
          </div>
          <img src="/assets/mobile-ui/assets/images/notification.png" alt="" class="w-7 h-7 text-right" />
        </div>
        <div class="flex justify-between px-5 pt-4 items-center">
          <div class="col-span-2">
            <div class="flex gap-2 items-center">
              <div class="col-start-1 mr-1 col-end-2">
                <img src="/assets/mobile-ui/assets/images/Avatar.png" alt="" class="rounded-full w-10 h-10 mt-2" />
              </div>
              <div class="text-base col-start-2 col-span-4 mt-2 ml-1">
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
                <h3 class="font-semibold text-1x1">Leslie Alexander</h3>
                <p class="text-xs">Co-Founder / CEO</p>
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
    </div>
  `,
})
export class WebUiNotificationListComponent {}
