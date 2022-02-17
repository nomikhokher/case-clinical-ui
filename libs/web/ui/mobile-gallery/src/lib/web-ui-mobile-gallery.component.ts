import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-gallery',
  template: `
    <div class="bg-white head-cl relative h-screen pt-8 dark:bg-gray-600">
      <div
        class="flex px-5 justify-between items-center gap-4 mt-0 mb-4 pb-0 border-b dark:border-solid dark:border-2 dark:border-gray-500"
      >
        <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon>
        <div>
          <h2 class="text-2xl font-medium title-font pl-1 text-gray-900 dark:text-white">Gallery</h2>
        </div>
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
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      <div class="flex gap-2 px-5">
        <div>
          <img class=" rounded-md w-full text-right" src="/assets/mobile-ui/assets/images/g1.png" alt="" />
        </div>
        <div>
          <img class="rounded-md w-full mb-3" src="/assets/mobile-ui/assets/images/g3.png" alt="" />
          <img class="rounded-md w-full" src="/assets/mobile-ui/assets/images/g2.png" alt="" />
        </div>
      </div>

      <div class="flex gap-2 px-5 mt-2">
        <div>
          <img class=" rounded-md w-full mb-3" src="/assets/mobile-ui/assets/images/g4.png" alt="" />
          <img class=" rounded-md w-full " src="/assets/mobile-ui/assets/images/g5.png" alt="" />
        </div>
        <div>
          <img class=" rounded-md w-full text-right" src="/assets/mobile-ui/assets/images/g6.png" alt="" />
        </div>
      </div>

      <div class="flex gap-2 px-5 mt-2">
        <div>
          <img class=" rounded-md w-full text-right" src="/assets/mobile-ui/assets/images/g7.png" alt="" />
        </div>
        <div>
          <img class=" rounded-md w-full text-right" src="/assets/mobile-ui/assets/images/g8.png" alt="" />
        </div>
        <div>
          <img class=" rounded-md w-full text-right" src="/assets/mobile-ui/assets/images/g9.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">      
    </div> -->
  `,
})
export class WebUiMobileGalleryComponent {}
