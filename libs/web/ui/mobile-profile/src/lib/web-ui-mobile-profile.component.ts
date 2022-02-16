import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-profile',
  template: `
    <div class="bg-white head-cl  relative h-screen pt-8 dark:bg-gray-600">
      <div class="flex px-5 justify-between items-center gap-4 border-b">
        <!-- <div ><i  class="fa fa-angle-left fa-solid fa-2x py-1"></i></div> -->
        <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon>
        <div>
          <h2 class="text-2xl font-medium title-font  text-gray-900 dark:text-white" style="margin-left: -40px; ">
            Profile
          </h2>
        </div>
        <div></div>
      </div>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex px-5 gap-5 items-center gap-2 pt-4 sm:px-5">
        <div class="col-start-1 col-end-2">
          <img class=" rounded-full w-16 h-16" src="/assets/mobile-ui/assets/images/profile-blk.png" alt="" />
        </div>
        <div class="font-medium col-start-2 col-span-4 mt-2 dark:text-gray-200">
          <h3>Leslie Alexander</h3>
          <p class="text-indigo-600">Co-Founder / CEO</p>
        </div>
      </div>
      <div class="mx-5 mt-8 mb-4 py-4 rounded-md bg-gray-100 px-3 dark:bg-gray-500 dark:text-white">
        <div class="col-start-1 col-end-7">
          <label class="block">
            <span class=" text-lg font-lg text-black font-lg dark:text-white"> Display Name </span>
            <input
              type="text"
              name="text"
              class="px-0 bg-transparent mt-1 focus:outline-none border-0 block w-full text-lg focus:ring-0"
              placeholder="Enter Your Display Name"
            />
          </label>
        </div>
      </div>
      <div class="px-3 mx-5 my-2 pt-0 rounded-md bg-gray-100 dark:bg-gray-500 dark:text-white">
        <div class="col-start-1 col-end-7">
          <label class="block">
            <span class=" text-lg font-lg text-black font-lg dark:text-white"> Bio </span>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Tell about yourself in few words"
              class="px-0 border-0 resize-none bg-transparent focus:outline-none block w-full text-lg h-16"
            ></textarea>
          </label>
        </div>
      </div>
      <div class=" px-3 mx-5 mt-4 py-4 rounded-md bg-gray-100 dark:bg-gray-500 dark:text-white">
        <div class="col-start-1 col-end-7">
          <label class="block">
            <span class=" text-lg font-lg text-black font-lg dark:text-white"> Email </span>
            <input
              type="email"
              name="email"
              class="px-0 bg-transparent mt-1 focus:outline-none block w-full sm:text-lg focus:ring-0 border-0"
              placeholder="Your email for marketplace"
            />
          </label>
        </div>
      </div>
      <div class="btn">
        <div class="absolute inset-x-0 bottom-0 ">
          <hr class="mb-3" />
          <div class="flex justify-center mb-8">
            <button
              class="w-full rounded-full text-white bg-indigo-500  py-2  mx-5 px-6 focus:outline-none hover:bg-indigo-600  text-lg"
            >
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileProfileComponent {}
