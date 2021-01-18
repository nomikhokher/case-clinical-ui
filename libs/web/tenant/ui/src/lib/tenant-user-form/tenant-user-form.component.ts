import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TenantRole } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'

@Component({
  selector: 'tenant-user-form',
  template: `
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <div class="bg-white px-6 py-4">
        <ui-form #form [model]="model" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <button
            [disabled]="!form?.form?.valid"
            type="submit"
            class="flex mx-auto bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 justify-center px-12 py-2 border border-transparent shadow-sm text-lg font-medium rounded-md text-gray-300  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </ui-form>
      </div>
    </div>
  `,
})
export class TenantUserFormComponent implements OnInit {
  @Input() options: any[] = []
  model = { role: 'User' }
  fields = []
  @Output() submitForm = new EventEmitter()

  ngOnInit(): void {
    this.fields = [
      WebUiFormField.select('userId', { label: 'User', required: true, options: this.options }),
      WebUiFormField.select(
        'role',
        {
          label: 'Role',
          options: Object.keys(TenantRole).map((value) => ({ value, label: value })),
        },
        { defaultValue: 'User' },
      ),
    ]
  }
}
