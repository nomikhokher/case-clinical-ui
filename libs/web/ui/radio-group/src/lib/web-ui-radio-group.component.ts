import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-radio-group',
  template: `
    <div>
      <label class="text-base font-medium text-gray-900">{{ heading.title }}</label>
      <p class="text-sm leading-5 text-gray-500">{{ heading.description }}</p>
      <fieldset class="mt-4">
        <div class="" [ngClass]="inlineRadio == true ? 'space-x-6 flex' : 'space-y-6'">
          <div class="flex items-center" *ngFor="let item of radioButtons; let i = index">
            <input
              [id]="'radio_' + i"
              name="notification-method"
              type="radio"
              checked
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <div class="ml-3 text-sm" [ngClass]="inlineDetail == true ? 'space-x-3' : ''">
              <label [for]="'radio_' + i" class="font-medium text-gray-700">{{ item.name }}</label>
              <span *ngIf="inlineDetail == true" [id]="'radio_' + i" class="text-gray-500">{{ item.detail }}</span>
              <p *ngIf="inlineDetail == false" [id]="'radio_' + i" class="text-gray-500">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  `,
})
export class WebUiRadioGroupComponent {
  @Input() heading
  @Input() inlineRadio?: boolean | string
  @Input() inlineDetail?: boolean | string
  @Input() radioButtons
}
