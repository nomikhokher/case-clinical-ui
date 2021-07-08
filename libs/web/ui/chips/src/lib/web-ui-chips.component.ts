import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-chips',
  template: `
    <div class="p-5">
      <div class="flex flex-wrap justify-center">
        <div
          *ngFor="let chip of chips; let i = index"
          class="flex justify-center items-center m-1 font-medium py-1.5  rounded-full {{ chip.textColor }} {{
            chip.bgColor
          }} border hover:{{ chip.hoverColor }} cursor-pointer "
          [ngClass]="chip.cross ? 'px-2' : 'px-4'"
        >
          <div *ngIf="chip.icon" class="flex flex-auto flex-row-reverse">
            <ui-icon size="md" class="h-5 w-5 " icon="{{ chip.icon }}"></ui-icon>
          </div>
          <div
            slot="avatar"
            *ngIf="chip.img"
            class="flex relative w-4 h-4 bg-orange-500 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"
          >
            <img class="rounded-full" alt="A" src="{{ chip.img }}" />
          </div>
          <div class="text-xs font-normal leading-none max-w-full flex-initial">{{ chip.text }}</div>

          <div *ngIf="chip.cross" class="ml-2">
            <ui-icon size="lg" class="h-3 w-3" icon="cross" (click)="deleteItem(i)"></ui-icon>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiChipsComponent {
  @Input() chips?: Array<any>

  deleteItem(i) {
    console.log(i)

    this.chips.splice(i, 1)
  }
}
