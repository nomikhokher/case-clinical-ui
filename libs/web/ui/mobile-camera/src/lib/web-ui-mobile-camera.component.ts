import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-camera',
  template: `
    <div class="  h-screen bg-black  ">
      <div class=" px-5  pt-6 pb-6 border-b">
        <!-- <div ><i  class="fa fa-angle-left fa-solid fa-2x py-1 text-white"></i></div> -->
        <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon>
      </div>

      <div>
        <a href=""
          ><img src="/assets/mobile-ui/assets/images/display-pic.png" alt="" id="" class="w-full border-0 "
        /></a>
      </div>

      <div class=" flex  mt-14 justify-between items-center gap-4  px-5">
        <div>
          <a href=""
            ><img src="/assets/mobile-ui/assets/images/cam-pic.png" alt="" id="" class="w-full border-0 mt-10"
          /></a>
        </div>
        <div>
          <a href=""
            ><img src="/assets/mobile-ui/assets/images/circle-btn.png" alt="" id="" class="w-full border-0  "
          /></a>
        </div>
        <div>
          <a href=""
            ><img src="/assets/mobile-ui/assets/images/cam.png" alt="" id="" class="w-full border-0 mt-10"
          /></a>
        </div>
      </div>
    </div>

    <!-- <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>ui-mobile-camera</code>
      </div>
    </div> -->
  `,
})
export class WebUiMobileCameraComponent {}
