import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-best-seller-scroll',
  template: `
    <div class="mx-auto mt-2 bg-gray-200 w-mobile h-mobile">
      <div class="bg-white pt-8">
        <div class="flex px-5 justify-between items-center gap-4 border-b pb-1">
          <div>
            <div class=" relative  bg-slate-100 rounded-md py-1 search ">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <!-- Heroicon name: solid/mail -->
                <img src="/assets/image/search.png" alt="" class="w-5 h-5 " />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-slate-200 focus:outline-none block w-full text-lg font-normal pl-10 px-4 text-1xl h-12 border-gray-300 rounded-md"
                placeholder="Search or enter NFTs…"
              />
            </div>
          </div>

          <div>
            <h2 class="text-1xl font-medium title-font pl-1 text-gray-900 text-right">Cancel</h2>
          </div>
        </div>
        <div class="flex justify-between px-5 pt-4 items-center">
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
              class="w-full rounded-full text-bl border-gray-500 border text-xs py-1.5 px-3 focus:outline-none bg-transparent"
            >
              Follow
            </button>
          </div>
        </div>
        <div class="flex justify-between px-5 pt-8 items-center">
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
              class="w-full rounded-full text-bl  border-gray-500 border text-xs py-1.5 px-3 focus:outline-none bg-transparent"
            >
              Follow
            </button>
          </div>
        </div>
        <div class="flex justify-between px-5 pt-8 items-center">
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
export class WebUiMobileBestSellerScrollComponent {}
