import { Component, Input, SimpleChanges } from '@angular/core'
@Component({
  selector: 'ui-carousel',
  template: `
    <div class="w-{{ width }}">
      <div class="overflow-auto relative flex-no-wrap flex">
        <ng-container *ngFor="let item of items; let i = index">
          <div
            *ngIf="active == i"
            class="w-full flex-shrink-0 h-{{ height }} bg-{{
              bgColor
            }}-700 text-white flex items-center justify-center rounded-{{ corners }}"
          >
            <img [src]="item.path" class="w-full h-{{ height }} rounded-{{ corners }}" />
          </div>
        </ng-container>
      </div>
      <div class="p-4 flex items-center justify-center flex-1 bg-opacity-75" [ngClass]="colorPicker()">
        <svg
          (click)="goToLeftCarousel()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-4 text-gray-50 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <ng-container *ngFor="let item of items; let i = index">
          <span
            class="bg-transparent p-1 border-gray-50 border-2 block mx-1 shadow rounded-full"
            [ngClass]="{ 'bg-gray-50': active === i }"
          ></span>
        </ng-container>
        <svg
          (click)="goToRightCarousel()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-4 text-gray-50 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  `,
})
export class WebUiCarouselComponent {
  @Input() bgColor?: string
  @Input() height?: string
  @Input() width?: string
  @Input() corners?: string
  @Input() items: Images[]

  public colorPicker() {
    return 'bg-' + this.bgColor + '-700'
  }

  active: number = 0

  interval: any

  ngOnInit(): void {
    this.setTimeInterval()
  }

  activeCarousel(act?: number) {
    this.active = act
  }

  setTimeInterval() {
    this.interval = setInterval(() => {
      if (this.items.length - 1 != this.active) {
        this.active++
        this.activeCarousel(this.active)
      } else {
        this.activeCarousel(0)
      }
    }, 2000)
  }

  goToLeftCarousel() {
    this.active--
    clearInterval(this.interval)
    this.active < 0 ? (this.active = this.items.length - 1) : ''
    this.setTimeInterval()
  }

  goToRightCarousel() {
    clearInterval(this.interval)
    this.active != this.items.length - 1 ? this.active++ : (this.active = 0)
    this.setTimeInterval()
  }
}

interface Images {
  img?: string
}
