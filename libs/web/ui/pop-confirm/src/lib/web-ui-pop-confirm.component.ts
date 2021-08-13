import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'ui-pop-confirm',
  template: `
    <div class="h-50 bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="group cursor-pointer text-gray-100 dark:text-gray-600 rounded  relative bg-gray-500 dark:bg-gray-200 inline-block border-b border-gray-400 text-center"
        >
          <button (click)="popConfirm()" class="px-3 py-1 focus:outline-none ">Click Me</button>

          <div
            class=" bg-gray-200 text-gray-900 border text-center popConfirm rounded-lg py-2 hidden absolute z-10 px-3 w-72"
            [ngClass]="popOverClasses()"
          >
            {{ title }}
            <div class="flex justify-center mt-3 space-x-3">
              <button
                class=" px-3 py-1 cursor-pointer hover:opacity-75  rounded focus:outline-none text-gray-200"
                (click)="popConfirm()"
                *ngFor="let item of buttons"
                [ngClass]="'bg-' + item.background + '-500'"
              >
                {{ item.text }}
              </button>
            </div>
            <svg
              class="absolute text-gray-200 h-2"
              [ngClass]="svgClasses()"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xml:space="preserve"
            >
              <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPopConfirmComponent {
  @Input() buttons: Array<object>
  @Input() title: string
  @Input() position: string
  constructor(private elm: ElementRef) {}

  popConfirm() {
    if (this.elm.nativeElement.querySelector('.popConfirm').classList.contains('hidden')) {
      this.elm.nativeElement.querySelector('.popConfirm').classList.remove('hidden')
    } else {
      this.elm.nativeElement.querySelector('.popConfirm').classList.add('hidden')
    }
  }

  popOverClasses() {
    if (this.position == 'top-left') {
      //done
      return '-top-24 -left-60'
    } else if (this.position == 'top-right') {
      return 'left-6 -top-24 -right-6' //done
    } else if (this.position == 'top-center') {
      return ' -top-24 -right-20 ' // done
    } else if (this.position == 'bottom-left') {
      return '-bottom-24 right-6' //done
    } else if (this.position == 'bottom-right') {
      return '-bottom-24 left-6'
    } else if (this.position == 'bottom-center') {
      return '-bottom-24 -right-20'
    }
  }

  svgClasses() {
    if (this.position == 'bottom-left') {
      return 'transform rotate-180 bottom-full right-6'
    } else if (this.position == 'bottom-right') {
      return 'transform rotate-180 bottom-full left-6'
    } else if (this.position == 'bottom-center') {
      return 'transform rotate-180 bottom-full w-full'
    } else if (this.position == 'top-left') {
      //done
      return 'right-6 top-full'
    } else if (this.position == 'top-right') {
      return 'left-6 top-full'
    } else if (this.position == 'top-center') {
      return 'w-full top-full'
    }
  }
}
