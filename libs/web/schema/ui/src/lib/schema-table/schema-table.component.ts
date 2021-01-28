import { Component, Input } from '@angular/core'
import { Schema } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'schema-table',
  template: `
    <ng-container *ngIf="!schemata?.length">
      <div class="flex flex-col space-y-10 py-24 text-lg text-gray-500 justify-center items-center">
        <div>Not schemata found.</div>
        <div>
          <ui-button routerLink="create" label="Create Schema"></ui-button>
        </div>
      </div>
    </ng-container>
    <div class="shadow overflow-hidden sm:rounded-lg" *ngIf="schemata?.length">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="relative px-6 py-3" *ngIf="isOwner">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-50 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <ng-container *ngFor="let schema of schemata">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" [attr.src]="'assets/images/logo.png'" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-200">
                      <a [routerLink]="schema.id">
                        {{ schema.name }}
                      </a>
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ schema.id }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" *ngIf="isOwner">
                <a [routerLink]="[schema.id, 'edit']" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
})
export class SchemaTableComponent {
  @Input() isOwner = false
  @Input() schemata: Schema[]
}
