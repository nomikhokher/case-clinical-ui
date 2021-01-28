import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TenantRole, TenantUser } from '@schema-driven/web/core/data-access'
import { WebUiFormField } from '@schema-driven/web/ui/form'

@Component({
  selector: 'admin-tenant-user-role',
  template: `
    <ui-form (submitForm)="submitForm.emit($event.role)" [fields]="fields" [model]="user">
      <button class="text-indigo-600 hover:text-indigo-900">Update</button>
    </ui-form>
  `,
})
export class TenantUserRoleComponent {
  @Input() options: any[] = []
  @Input() user: TenantUser
  @Output() submitForm = new EventEmitter()
  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.select(
        'role',
        {
          options: Object.keys(TenantRole).map((value) => ({ value, label: value })),
        },
        { defaultValue: 'User' },
      ),
    ]),
  ]
}
