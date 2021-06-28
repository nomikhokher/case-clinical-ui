import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'ui-color-picker',
  template: `
    <div class="bg-white mx-auto my-auto p-6">
      <div>
        <div>
          <label
            for="color-picker"
            class="block mb-1 font-semibold"
            [ngClass]="{ 'ml-16': position == 'left', hidden: hideInput }"
            >Select a color</label
          >
          <div class="flex-wrap flex flex-row relative">
            <div class="flex-wrap flex flex-row relative" [ngClass]="position == 'left' ? 'flex-row-reverse' : ''">
              <input
                id="color-picker"
                class="border border-gray-400 p-2 rounded-lg"
                [(ngModel)]="currentColor"
                [ngClass]="{ 'ml-3': position == 'left', hidden: hideInput }"
              />
              <div
                (click)="isOpen = !isOpen"
                class="cursor-pointer rounded-full my-auto h-10 w-10 ml-3 flex"
                [ngClass]="currentColor && 'bg-' + currentColor"
                (clickOutside)="isOpen = false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  [ngClass]="iconColor"
                  class="h-6 w-6 mx-auto my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
            </div>
            <div
              *ngIf="isOpen"
              class="border border-gray-300 origin-top-right absolute left-0 top-full mt-2 rounded-md shadow-lg"
            >
              <div class="rounded-md bg-white shadow-xs p-2">
                <div class="flex">
                  <ng-container *ngFor="let color of available_colors()">
                    <div class="">
                      <ng-container *ngFor="let variant of available_variants()">
                        <div
                          (click)="selectColor(color, variant)"
                          class="cursor-pointer w-6 h-6 rounded-full mx-1 my-1"
                          [ngClass]="color && 'bg-' + color + '-' + variant"
                        ></div>
                      </ng-container>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiColorPickerComponent {
  @Input() userColors?: string[]
  @Input() userVariants?: number[]
  @Input() position?: string
  @Input() hideInput?: boolean

  public colors: string[] = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
  public variants: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  currentColor: string = ''
  iconColor: string = ''
  isOpen: boolean = false

  initColor() {
    this.currentColor = 'red-800'
    this.setIconWhite()
  }
  setIconWhite() {
    this.iconColor = 'text-white'
  }
  setIconBlack() {
    this.iconColor = 'text-black'
  }

  selectColor(color, variant) {
    this.currentColor = color + '-' + variant
    if (variant < 500) {
      this.setIconBlack()
    } else {
      this.setIconWhite()
    }
  }

  available_colors() {
    if (this.userColors != undefined) {
      return this.userColors
    }
    return this.colors
  }

  available_variants() {
    if (this.userVariants != undefined) {
      return this.userVariants
    }
    return this.variants
  }
}
