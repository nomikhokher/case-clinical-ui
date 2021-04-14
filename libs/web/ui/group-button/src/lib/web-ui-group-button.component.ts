import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-group-button',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
          <ng-container *ngFor="let button of buttons; first as firstElement; last as lastElementlast">
            <ng-container>
              <button
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                [ngClass]="[
                  firstElement ? 'rounded-l-md' : '-ml-px relative',
                  lastElementlast ? '-ml-px relative rounded-r-md' : ''
                ]"
              >
                <ng-container *ngIf="!button.dircetion || button.dircetion === 'left'">
                  <ui-icon class="absolute left-0" [icon]="button.icon"></ui-icon>&nbsp;
                </ng-container>
                <ng-container *ngIf="button.dircetion == 'right'">
                  <ui-icon class="absolute right-0" [icon]="button.icon"></ui-icon>
                </ng-container>

                {{ button.name }}
              </button>
            </ng-container>
          </ng-container>
        </span>
      </div>
    </div>
  `,
})
export class WebUiGroupButtonComponent {
  @Input() buttons: any
  @Input() dropDownMenus: [{ id?: string; name: string }]
  public dropDownToggle: boolean = false

  ngOnInit() {}

  menuToggle() {
    this.dropDownToggle = !this.dropDownToggle
  }
}
