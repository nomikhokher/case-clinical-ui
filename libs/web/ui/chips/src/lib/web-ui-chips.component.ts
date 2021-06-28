import { Component, Input } from '@angular/core'
import { Chips } from '../../../../dev/feature/src/lib/dev-chips/dev-chips.component'

@Component({
  selector: 'ui-chips',
  template: `
    <div class="p-5">
      <div class="flex flex-wrap justify-center">
        <div
          *ngFor="let chip of chips; let i = index"
          class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full {{ chip.textColor }} {{
            chip.bgColor
          }} border hover:{{ chip.hoverColor }} cursor-pointer "
        >
          <div *ngIf="chip.icon">
            <ui-icon icon="{{ chip.icon }}" class="feather feather-heart w-4 h-5 mr-1"></ui-icon>
          </div>
          <div
            slot="avatar"
            *ngIf="chip.img"
            class="flex relative w-4 h-4 bg-orange-500 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"
          >
            <img class="rounded-full" alt="A" src="{{ chip.img }}" />
          </div>
          <div class="text-xs font-normal leading-none max-w-full flex-initial">Hello!</div>
          <div class="flex flex-auto flex-row-reverse">
            <div *ngIf="chip.cross">
              <ui-icon
                icon="{{ chip.cross }}"
                class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-4 h-5 mx-1"
                (click)="deleteItem(i)"
              ></ui-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiChipsComponent {
  @Input() chips: Chips[]

  deleteItem(i) {
    console.log(i)

    this.chips.splice(i, 1)
  }
}
