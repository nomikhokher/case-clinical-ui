import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'ui-badge',
  template: `
    <ng-container *ngIf="!removeIcon">
      <div class="relative">
        <span
          (click)="badgeClick('onClick')"
          class="inline-flex justify-items-center px-2.5 py-0.5 hover:opacity-80 cursor-pointer text-{{
            size
          }} font-medium bg-{{ color }}-100 text-{{ color }}-800"
          [ngClass]="[
            rounded == 'true' ? 'rounded-full' : 'rounded',
            position == 'right' ? 'right-1 absolute bottom-0' : ''
          ]"
        >
          <div class="m-1" *ngIf="icon" [ngClass]="icon_size">
            <ui-icon [icon]="icon" size="lg" [class]="icon_size"></ui-icon>
          </div>
          <span>
            {{ text }}
          </span>
        </span>
      </div>
    </ng-container>

    <ng-container *ngIf="removeIcon">
      <h1 class="my-4">Badges with remove button</h1>
      <div class="relative">
        <span
          (click)="badgeClick('onClick')"
          class="rounded-full hover:opacity-80 removeIcon cursor-pointer text-{{ size }} font-medium bg-{{
            color
          }}-100 text-{{ color }}-700"
          [ngClass]="[
            size == 'sm' ? 'py-0.5 pl-2.5 pr-1' : 'py-0.5 pl-2 pr-0.5',
            position == 'right' ? 'right-1 absolute bottom-0' : ''
          ]"
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
            <svg (click)="badgeClick('onClose')" class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>
      </div>
    </ng-container>
  `,
})
export class WebUiBadgeComponent {
  @Input() text?: string
  @Input() color?: string
  @Input() size?: string
  @Input() rounded?: boolean
  @Input() icon?: string
  @Input() removeIcon: string
  @Input() position: string

  public icon_size: string
  public remove_icon_size: string

  constructor(public elm: ElementRef) {}
  badgeClick(value) {
    if (value == 'onClose') {
      this.elm.nativeElement.querySelector('.removeIcon').classList.add('opacity-0')
      setTimeout(() => {
        this.elm.nativeElement.querySelector('.removeIcon').classList.remove('opacity-0')
      }, 5000)
    } else {
      alert('You clicked on a Badge!')
    }
  }

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
