import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-footer',
  template: `
    <footer
      class="bg-{{ bgColor == 'white' ? 'gray-50' : bgColor + '-800' }} dark:bg-gray-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-7">
          <div *ngFor="let list of lists">
            <h3 class="text-sm font-semibold text-{{ textColor }}-900 tracking-wider uppercase dark:text-gray-50">
              {{ list.heading }}
            </h3>
            <ul class="mt-4 space-y-4" *ngFor="let item of list.items">
              <li>
                <a href="#" class="text-base text-{{ textColor }}-900 hover:text-{{ textColor }}-500 dark:text-gray-50">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-900 pt-8 md:flex md:items-center md:justify-between">
          <div class="flex space-x-6 md:order-2">
            <a
              href="javascript:void(0)"
              class="h-6 w-6 text-{{ textColor }}-900 hover:text-{{ textColor }}-900 dark:text-gray-50"
              *ngFor="let icon of icons"
            >
              <ui-icon [icon]="icon.svg" size="lg" class="h-6 w-6"></ui-icon>
            </a>
          </div>
          <p class="mt-8 text-base text-{{ textColor }}-900 md:mt-0 md:order-1 dark:text-gray-50">
            {{ rights }}
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class WebUiFooterComponent {
  @Input() bgColor: string
  @Input() textColor: string
  @Input() lists: Lists[]
  @Input() rights: string
  @Input() icons: Icons[]
}

interface Lists {
  heading?: string
  items?: Items[]
}

interface Items {
  title?: string
}

interface Icons {
  svg?: string
}
