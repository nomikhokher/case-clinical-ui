import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-collection',
  template: `
    <div class="mx-auto mt-2  w-mobile h-mobile">
      <div class="bg-white pt-8">
        <div class="flex px-5 justify-between items-center gap-4 border-b">
          <div><i class="fa fa-angle-left fa-solid fa-2x py-1"></i></div>
          <div>
            <h2 class="text-2xl font-medium title-font pl-1 text-gray-900">Choose Collection</h2>
          </div>
          <img src="/assets/image/plus.png" alt="" class="w-5 h-5 text-right" />
        </div>

        <section class=" body-font">
          <div class=" px-5 pt-4 pb-5 mx-auto shadow-lg shadow-blue-500/20 rounded-lg bg-white">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              <div class=" mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src="/assets/image/img1.png" />
                </div>
                <h2 class="title-font text-base font-bold font-medium text-gray-900 mt-2 ">The Cubes of Destiny</h2>
                <p class="leading-relaxed text-base">ERC-1155</p>
              </div>
            </div>
          </div>
          <div class=" px-5 pt-4 mt-5 pb-3 mx-auto shadow-lg shadow-blue-500/20 rounded-lg rounded-lg ">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              <div class=" mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src="/assets/image/img2.png" />
                </div>
                <h2 class="title-font text-base font-bold font-medium text-gray-900 mt-2 ">The Cubes of Destiny</h2>
                <p class="leading-relaxed text-base">ERC-1155</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class WebUiMobileCollectionComponent {}
