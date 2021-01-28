import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TenantRole } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'

@Component({
  selector: 'admin-tenant-user-form',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <ui-form #form [model]="model" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <div class="text-right">
            <ui-button type="submit" [disabled]="!form.form?.valid" label="Save"></ui-button>
          </div>
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
