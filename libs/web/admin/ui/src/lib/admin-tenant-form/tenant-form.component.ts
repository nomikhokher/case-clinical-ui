import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Tenant } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'

@Component({
  selector: 'admin-tenant-form',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <ui-form #form [model]="tenant" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <div class="text-right">
            <ui-button type="submit" label="Save"> </ui-button>
          </div>
        </ui-form>
      </div>
    </div>
  `,
})
export class TenantFormComponent {
  @Input() tenant: Tenant = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = [WebUiFormField.input('name', { label: 'Name', required: true })]
}
