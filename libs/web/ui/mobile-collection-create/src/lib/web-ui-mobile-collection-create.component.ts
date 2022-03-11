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
    <div class="bg-white   relative h-screen pt-8 ">
      <div class="flex head-cl px-5 justify-between items-center gap-4 pb-2 border-b">
        <div><i class="fa fa-angle-left fa-solid fa-2x py-1"></i></div>
        <div>
          <h2 class="text-2xl font-medium title-font  text-gray-900">Create New Collection</h2>
        </div>
        <div></div>
      </div>
      <!-- This example requires Tailwind CSS v2.0+ -->

      <div class="  mx-5  my-7 py-12 rounded-md pro-box px-3">
        <div class="mt-1  px-6 pt-5 pb-11  rounded-md">
          <div class="space-y-1 text-center">
            <h2 class="text-xl">Upload Image</h2>
            <p class="pl-1 text-sm">500 x 500 recommended</p>
            <div class="text-sm text-gray-600">
              <label for="file-upload" class="top-2 relative cursor-pointer ">
                <span
                  class="w-full  rounded-full text-white bg- py-2   bg-c px-3 focus:outline-none hover:bg-indigo-600  text-sm"
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

      <div class="  mx-5  my-7 py-5 rounded-md pro-box px-3">
        <div class="col-start-1 col-end-7">
          <label class="block">
            <span class=" text-sm font-medium text-black font-medium"> Name </span>
            <input
              type="text"
              name="text"
              class="mt-1 focus:outline-none  border-0 block w-full text-sm focus:ring-0"
              placeholder="Example: Treasures of the Sea"
            />
          </label>
        </div>
      </div>
      <div class=" px-3 mx-5  my-5  pt-4 rounded-md pro-box">
        <div class="col-start-1 col-end-7">
          <label class="block">
            <span class=" text-sm font-medium text-black font-medium"> Description </span>

            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Infomation your collection"
              class=" border-0 resize-none bg-transparent focus:outline-none block w-full text-sm "
            ></textarea>
          </label>
        </div>
      </div>

      <div class="   btn">
        <div class="mr-4 absolute inset-x-0 bottom-0 ">
          <hr class="mb-3" />
          <div class="flex justify-center mb-4">
            <button class="w-full rounded-full text-white   py-2  mx-5 px-6 focus:outline-none   text-lg">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileCollectionCreateComponent {}
