import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-camera',
  template: `
    <div class="mx-auto bg-black pt-8">
      <div class="flex px-5 justify-between items-center gap-4">
        <!-- <div ><i  class="fa fa-angle-left fa-solid fa-2x py-1 text-white"></i></div> -->
        <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 text-white"></ui-icon>
      </div>

      <div>
        <a href=""
          ><img src="/assets/mobile-ui/assets/images/display-pic.png" alt="" id="" class="w-full border-0 "
        /></a>
      </div>

      <div class="pb-5 flex  mt-14 justify-between items-center gap-4  px-5">
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
  `,
})
export class WebUiMobileCameraComponent {}
