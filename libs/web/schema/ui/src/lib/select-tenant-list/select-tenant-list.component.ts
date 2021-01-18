import { Component, Input } from '@angular/core'
import { Tenant } from '@metadata/web/core/data-access'

@Component({
  selector: 'select-tenant-list',
  template: `
    <div class="grid  grid-cols-3 gap-6">
      <ng-container *ngFor="let tenant of tenants">
        <div
          class="shadow bg-white overflow-hidden border-b border-gray-200 sm:rounded-lg cursor-pointer"
          [routerLink]="tenant.id"
        >
          <div class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" [attr.src]="'assets/images/logo.png'" alt="" />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  <a [routerLink]="tenant.id">
                    {{ tenant.name }}
                  </a>
                </div>
                <div class="text-sm text-gray-500">
                  {{ tenant.id }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class SelectTenantListComponent {
  @Input() tenants: Tenant[]
}
