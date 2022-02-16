import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-wrapper',
  template: `
    <div class="bg-white border-1 border-black dark:bg-gray-500 dark:text-white">
      <div class="absolute bg-white py- 6 px-4 left-3 mx-4 dark:bg-gray-500 dark:text-white">
        <textarea class="h-mobile w-code dark:bg-gray-500 dark:text-white">
        
          <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>          
          <div        
          class="bg-gray-600 text-black mx-10 my-5 py-4 px-2 max-w-7xl flex text-center space-y-1 space-x-1 justify-between items-center sm:px-6 lg:px-8 md:justify-start md:space-x-10 dark:bg-gray-500 dark:text-white "
          >                  
          </div>          
      </textarea
        >
      </div>
      <div
        class="absolute right-6 border-8 border-t-8 border-black rounded-lg mx-auto mt-2 bg-gray-200 h-mobile w-mobile"
      >
        <div class="py-4 px-4 text-center text-lg bg-indigo-600 dark:bg-indigo-800 dark:text-white"></div>
        <h1>test</h1>
        <!-- <ng-content></ng-content> -->
      </div>
    </div>
  `,
})
export class WebUiMobileWrapperComponent {}
