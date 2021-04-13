import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-badge',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <ng-container *ngIf="!removeIcon">
          <h1 class="my-4">Badges</h1>
          <span
            class="inline-flex items-center px-2.5 py-0.5 text-{{ size }} font-medium bg-{{ color }}-100 text-{{
              color
            }}-800"
            [ngClass]="rounded ? 'rounded' : 'rounded-full'"
          >
            <ui-icon *ngIf="icon" [icon]="icon" [class]="icon_size"></ui-icon>
            Badge
          </span>
        </ng-container>

        <ng-container *ngIf="removeIcon">
          <h1 class="my-4">Badges with remove button</h1>

          <span
            class="inline-flex rounded-full items-center text-{{ size }} font-medium bg-{{ color }}-100 text-{{
              color
            }}-700"
            [ngClass]="size == 'sm' ? 'py-0.5 pl-2.5 pr-1' : 'py-0.5 pl-2 pr-0.5'"
          >
            badge
            <button
              type="button"
              class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-{{
                color
              }}-400 hover:bg-{{ color }}-200 hover:text-{{ color }}-500 focus:outline-none focus:bg-{{
                color
              }}-500 focus:text-white"
            >
              <span class="sr-only">Remove large option</span>
              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>
        </ng-container>
      </div>
    </div>
  `,
})
export class WebUiBadgeComponent {
  @Input() color?: string
  @Input() size?: string
  @Input() rounded?: string
  @Input() icon?: string
  @Input() removeIcon: string

  public icon_size: string
  public remove_icon_size: string

  ngOnInit() {
    if (!this.color) {
      this.color = 'blue'
    }
    if (!this.size) {
      this.size = 'xs'
    }
    switch (this.size) {
      case 'lg':
        this.icon_size = 'w-5 h-5'
        break
      case 'md':
        this.icon_size = 'w-4 h-4'
        break
      case 'sm':
        this.icon_size = 'w-3 h-3'
        break
      case 'xs':
        this.icon_size = 'w-2 h-2'
        break
      default:
        this.icon_size = 'w-2 h-2'
        break
    }
  }
}
