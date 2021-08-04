import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-chips',
  template: `
    <div class="p-5">
      <div class="flex flex-wrap justify-center">
        <div
          *ngFor="let chip of chips; let i = index"
          class="flex justify-center items-center m-1 font-medium py-1.5  rounded-full text-{{
            chip.textColor
          }}-100 bg-{{ chip.bgColor }}-700 border hover:bg-{{ chip.hoverColor }}-600 cursor-pointer "
          [ngClass]="chip.cross ? 'px-2' : 'px-4'"
        >
          <div *ngIf="chip.icon" class="flex flex-auto flex-row-reverse">
            <ui-icon size="md" class="h-5 w-5 " icon="{{ chip.icon }}"></ui-icon>
          </div>
          <div
            slot="avatar"
            *ngIf="chip.img"
            class="flex relative w-4 h-4 bg-{{
              chip.bgColor
            }}-500 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"
          >
            <img class="rounded-full" alt="A" src="{{ chip.img }}" />
          </div>
          <div class="text-xs font-normal leading-none max-w-full flex-initial">{{ chip.text }}</div>
          <div *ngIf="chip.cross == 'true' || chip.cross === true">
            <svg
              (click)="deleteItem(i)"
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiChipsComponent {
  @Input() chips?: Array<any>

  deleteItem(i) {
    this.chips.splice(i, 1)
  }
}
