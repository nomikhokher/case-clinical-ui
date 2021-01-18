import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TenantRole, TenantUser } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'

@Component({
  selector: 'tenant-user-table',
  template: `
    <ng-container *ngIf="!users?.length">
      <div class="flex py-24 text-gray-700 justify-center align-center">This tenant has no users</div>
    </ng-container>
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" *ngIf="users?.length">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <ng-container *ngFor="let user of users">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" [attr.src]="user.user.avatarUrl" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ user.user.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ user.user.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <tenant-user-role [user]="user" (submitForm)="updateRole.emit([user.id, $event])"></tenant-user-role>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button (click)="removeTenantUser.emit(user.id)" class="text-indigo-600 hover:text-indigo-900">
                  Delete
                </button>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
})
export class TenantUserTableComponent {
  @Input() users: TenantUser[]
  @Output() updateRole = new EventEmitter<[string, TenantRole]>()
  @Output() removeTenantUser = new EventEmitter<string>()
  fields = [
    WebUiFormField.select('role', {
      options: Object.keys(TenantRole).map((value) => ({ value, label: value })),
    }),
  ]
}
