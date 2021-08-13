import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-tooltip',
  template: `
    <div class="h-50 bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="group cursor-pointer text-gray-100 w-28 dark:text-gray-600 rounded p-1 relative bg-gray-500 dark:bg-gray-200 inline-block border-b border-gray-400 text-center"
        >
          Hover Me
          <div
            class="opacity-0 bg-{{ color }}-900 text-{{
              color
            }}-100 text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 pointer-events-none"
            [ngClass]="toolTipClasses()"
          >
            {{ text }}
            <svg
              class="absolute text-{{ color }}-900 h-2"
              [ngClass]="tooltipSvgClasses()"
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
export class WebUiTooltipComponent {
  @Input() text: string
  @Input() color: string
  @Input() position: string

  toolTipClasses() {
    if (this.position == 'top-left') {
      return 'bottom-full -left-6'
    } else if (this.position == 'top-right') {
      return 'left-6 bottom-full -right-6'
    } else if (this.position == 'top-center') {
      return 'w-full bottom-full w-full'
    } else if (this.position == 'bottom-left') {
      return 'top-full py-2 mt-1 -left-6'
    } else if (this.position == 'bottom-right') {
      return 'top-full py-2 mt-1 -right-6'
    } else if (this.position == 'bottom-center') {
      return 'top-full py-2 mt-1 w-full'
    }
  }

  tooltipSvgClasses() {
    if (this.position == 'bottom-left') {
      return 'transform rotate-180 bottom-full right-6'
    } else if (this.position == 'bottom-right') {
      return 'transform rotate-180 bottom-full left-6'
    } else if (this.position == 'bottom-center') {
      return 'transform rotate-180 bottom-full w-full'
    } else if (this.position == 'top-left') {
      return 'right-6 top-full'
    } else if (this.position == 'top-right') {
      return 'left-6 top-full'
    } else if (this.position == 'top-center') {
      return 'w-full top-full'
    }
  }
}
