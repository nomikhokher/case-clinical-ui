import { Component, TemplateRef } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { Enum, Field, FieldDataType, Relation, Schema } from '@schema-driven/web/core/data-access'
import { SchemaEnumDetailStore } from './schema-enum-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm?.info?.errors">
        <pre class="bg-gray-300 text-red-800 rounded-md p-4">{{ vm?.info?.errors | json }}</pre>
      </ng-container>
      <ng-container *ngIf="!vm?.info?.errors">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div class="py-3 md:py-6 md:px-2 lg:py-0 lg:px-0 lg:col-span-8">
            <div
              class="flex justify-between items-center  px-6 py-3 mb-3 md:mb-6 bg-gray-800 text-gray-300 shadow rounded-md"
            >
              <div class="flex flex-col">
                <div class="text-lg font-semibold">
                  {{ vm?.item?.name }}
                </div>
                <div class="text-gray-500">
                  {{ vm?.item?.description }}
                </div>
              </div>
            </div>

            <div class="flex flex-col space-y-3">
              <div class="shadow rounded-md dark:bg-gray-800 dark:text-gray-500 text-center " *ngIf="vm.item">
                <enum-form (submitForm)="submitEditEnumForm(vm.item, $event)" [model]="vm.item"></enum-form>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [SchemaEnumDetailStore],
})
export class SchemaEnumDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: SchemaEnumDetailStore) {}

  submitEditEnumForm(input: Enum, { name, description, values }: Enum) {
    this.store.updateSchemaEnumEffect([input.id, { name, description, values }])
  }
}
