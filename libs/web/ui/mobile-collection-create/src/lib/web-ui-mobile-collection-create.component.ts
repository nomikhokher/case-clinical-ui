import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-collection-create',
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
        height: 633px;
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
            <h2 class="text-2xl font-medium title-font pl-1 dark:text-white">Create New Collection</h2>
          </div>
          <div></div>
        </div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="scroll-section">
          <div class="mx-5 mt-8 pb-12 rounded-md pro-box px-3 dark:bg-gray-700">
            <div class="mt-1 px-6 pt-5 pb-11  rounded-md">
              <div class="space-y-1 text-center">
                <h2 class="text-xl dark:text-white">Upload Image</h2>
                <p class="pl-1 text-sm">500 x 500 recommended</p>
                <div class="text-sm text-gray-600 pt-4">
                  <label for="file-upload" class="top-2 relative cursor-pointer ">
                    <span
                      class="w-full rounded-full text-white bg- py-2 bg-c px-3 focus:outline-none hover:bg-indigo-600  text-sm"
                      >Choose File</span
                    >
                    <div class="flex-shrink-0">
                      <input id="file-upload" name="file-upload" type="file" class=" sr-only" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-5 mt-4 mb-2 py-4 rounded-md pro-box px-3 dark:bg-gray-700">
            <div class="col-start-1 col-end-7">
              <label class="block">
                <span class=" text-sm font-medium dark:text-white "> Name </span>
                <input
                  type="text"
                  name="text"
                  class="mt-1 focus:outline-none  border-0 block w-full text-sm focus:ring-0"
                  placeholder="Example: Treasures of the Sea"
                />
              </label>
            </div>
          </div>

          <div class="px-3 mx-5 mt-4 py-2 rounded-md pro-box dark:bg-gray-700">
            <div class="col-start-1 col-end-7">
              <label class="block">
                <span class=" text-sm font-medium dark:text-white "> Description </span>
                <textarea
                  rows="3"
                  name="message"
                  id="message"
                  placeholder="Infomation your collection"
                  class=" border-0 resize-none bg-transparent focus:outline-none block w-full text-sm "
                ></textarea>
              </label>
            </div>
          </div>

          <div class="   btn ">
            <hr class="mt-24 border-b dark:border-solid dark:border-2 dark:border-gray-500 w-full" />
            <div class="mr-4 absolute inset-x-0 bottom-0 ">
              <div class="flex justify-center mb-4">
                <button class="w-full rounded-full text-white   py-2  mx-5 px-6 focus:outline-none   text-lg">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileCollectionCreateComponent {}
