import { Component } from '@angular/core'
import { SchemaEntityDetailStore } from './schema-entity-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.errors">
        <pre class="bg-gray-300 text-red-800 rounded-md p-4">{{ vm.errors | json }}</pre>
      </ng-container>
      <ng-container *ngIf="!vm.errors">
        <div
          class="flex justify-between items-center  px-6 py-3 mb-3 md:mb-6 bg-gray-800 text-gray-300 shadow rounded-md"
        >
          <div class="flex flex-col">
            <div class="text-lg font-semibold">
              {{ vm?.entity?.name }}
            </div>
            <div class="text-gray-500">
              {{ vm?.entity?.description }}
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <ng-container *ngFor="let field of vm.entity?.fields">
            <div class="px-2 py-4 shadow rounded-md dark:bg-gray-800 dark:text-gray-300 ">
              <div class="flex items-center space-x-3">
                <div><ui-icon icon="menu"></ui-icon></div>
                <div>
                  <entity-field-icon [field]="field"></entity-field-icon>
                </div>
                <div class="flex-grow">
                  <div class="text-lg font-semibold">
                    {{ field?.name }}
                  </div>
                  <div class="text-gray-500">
                    {{ field?.description }}
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </div>

        <!--        <pre class="bg-gray-900 text-gray-400 p-4 rounded-md">{{ vm.entity | json }}</pre>-->
        <!--        <div class="flex py-48 animate-pulse justify-center align-center">TBD: Entity</div>-->
        <!--        <pre class="bg-gray-900 text-gray-400 p-4 rounded-md">{{ vm.schema | json }}</pre>-->
      </ng-container>
    </ng-container>
  `,
  providers: [SchemaEntityDetailStore],
})
export class SchemaEntityDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: SchemaEntityDetailStore) {}
}
