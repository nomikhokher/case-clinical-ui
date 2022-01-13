import { Component, HostListener, Input, SimpleChanges } from '@angular/core'

@Component({
  selector: 'ui-dialog-box',
  template: `
    <ng-container>
      <div>
        <button
          *ngFor="let button of buttons; i as index"
          type="button"
          (click)="openDialogBox()"
          [ngClass]="i == 0 ? '' : 'ml-2'"
          class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-{{
            button.fontColor
          }}-200 bg-{{ button.color }}-500 hover:bg-{{ button.hoverColor }}-600 dark:text-{{
            button.fontColor
          }}-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ button.text }}
        </button>
        <!-- <button
          (click)="openDialogBox()"
          type="button"
          class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          Open Dialog Box
        </button> -->
        <div *ngIf="name">
          Your Text:<span class="font-bold"> {{ name }}</span>
        </div>
      </div>
    </ng-container>
    <div>
      <div
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        *ngIf="dialogHide == false"
      >
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " aria-hidden="true"></div>

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div
            class="inline-block align-bottom bg-white border dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"
            [ngClass]="width ? 'sm:max-w-' + width : 'sm:max-w-sm'"
          >
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4" *ngIf="closeButton == true">
              <button
                type="button"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  (click)="closeDialog()"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiDialogBoxComponent {
  public dialogHide = true

  @Input() closeButton?: boolean
  @Input() display?: boolean
  @Input() width?: string
  @Input() isActive?: boolean
  @Input() name?: string
  @Input() buttons?: Buttons
  @HostListener('click')
  clicked() {
    this.dialogHide = this.display === this.dialogHide ? true : false
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.closeDialog(Boolean(changes.isActive.firstChange))
    // console.log(this.name);
  }

  closeDialog(val: any) {
    this.dialogHide = true
    // console.log(this.name);
  }

  openDialogBox() {
    this.dialogHide = !this.dialogHide
    // console.log(this.name);
  }
}
interface Buttons {
  text: string
  color: string
  fontColor?: string
  icon?: string
  hoverColor?: string
}
