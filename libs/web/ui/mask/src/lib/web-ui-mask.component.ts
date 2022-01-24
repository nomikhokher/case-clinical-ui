import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-mask',
  template: `
    <div class="grid grid-cols-3 gap-4">
      <div class="mb-4" *ngFor="let item of items">
        <div
          class="text-center relative overflow-hidden bg-no-repeat bg-cover h-56 w-full"
          style="background-position: 50%;"
        >
          <img [src]="item.path" class="w-full h-56" />
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-{{
              item.bgColor
            }}-600 opacity-50"
          ></div>
        </div>
        <span class="text-{{ item.bgColor }}-800  font-extrabold">Mask Colour : {{ item.bgColor }}</span>
      </div>
    </div>
  `,
})
export class WebUiMaskComponent {
  @Input() items: Item[]
}
interface Item {
  img?: string
}
