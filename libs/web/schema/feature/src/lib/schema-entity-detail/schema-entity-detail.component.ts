import { Component, TemplateRef } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import {
  CreateSchemaEntityFieldInput,
  Entity,
  Field,
  FieldDataType,
  UpdateSchemaEntityFieldInput,
} from '@schema-driven/web/core/data-access'
import { SchemaEntityDetailStore } from './schema-entity-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.errors">
        <pre class="bg-gray-300 text-red-800 rounded-md p-4">{{ vm.errors | json }}</pre>
      </ng-container>
      <ng-container *ngIf="!vm.errors">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div class="py-3 md:py-6 md:px-2 lg:py-0 lg:px-0 lg:col-span-8">
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
              <div>
                <button (click)="openDialog(editEntityTpl, { entity: vm.entity })">
                  <ui-icon icon="pencil"></ui-icon>
                </button>
              </div>
            </div>

            <div class="flex flex-col space-y-3">
              <ng-container *ngIf="!vm.entity?.fields.length">
                <div class="px-2  py-16 shadow rounded-md dark:bg-gray-800 dark:text-gray-500 text-center ">
                  This Entity has no fields.
                </div>
              </ng-container>
              <ng-container *ngFor="let field of vm.entity?.fields">
                <div class="px-4 py-4 shadow rounded-md dark:bg-gray-800 dark:text-gray-300 ">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <div>
                        <entity-field-icon [data]="field.dataType" [field]="field.fieldType"></entity-field-icon>
                      </div>
                      <div class="flex-grow">
                        <div class="flex flex-col">
                          <div class="text-lg font-semibold">
                            {{ field?.name }}
                          </div>
                          <div class="text-gray-500">
                            {{ field?.description }}
                          </div>
                          <div class="flex space-x-2">
                            <span class="px-2 bg-gray-400 rounded-full text-gray-700 text-xs" *ngIf="!field.isNullable">
                              Required
                            </span>
                            <span class="px-2 bg-gray-400 rounded-full text-gray-700 text-xs" *ngIf="field.isNullable">
                              Nullable
                            </span>
                            <span class="px-2 bg-gray-400 rounded-full text-gray-700 text-xs" *ngIf="field.isName">
                              Name
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex space-x-2">
                      <button (click)="openDialog(editFieldTpl, { field: field })">
                        <ui-icon icon="pencil"></ui-icon>
                      </button>
                      <button (click)="deleteField(field)">
                        <ui-icon class="text-gray-500" icon="trash"></ui-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </ng-container>
            </div>
          </div>

          <div class="md:px-2 lg:px-0 lg:col-span-4">
            <nav class="space-y-1 md:space-y-3">
              <div
                class="dark:bg-gray-800 dark:text-gray-400 text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center justify-between font-medium"
              >
                <span class="truncate"> Fields </span>
              </div>
              <ng-container *ngFor="let type of vm.types">
                <button
                  (click)="openDialog(createFieldTpl, { type: type })"
                  class="w-full dark:bg-gray-800 dark:text-gray-400 text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center"
                >
                  <entity-field-icon [data]="type.data" [field]="type.field"></entity-field-icon>
                  <div class="flex flex-col space-x-2 items-start justify-start overflow-hidden">
                    <div class="ml-2 text-sm truncate font-medium">
                      {{ type.name }}
                    </div>
                    <div class="text-xs truncate text-gray-600">{{ type.description }}</div>
                  </div>
                </button>
              </ng-container>
            </nav>
          </div>
        </div>
        <ng-template #editEntityTpl let-ref>
          <div class="flex-grow flex flex-col">
            <div class="text-lg font-semibold tracking-wider px-4 py-3 flex space-x-4 items-center justify-between">
              <div class="flex items-center space-x-4">
                <ui-icon icon="table"></ui-icon>
                <div>Edit Entity</div>
              </div>
              <div class="font-light text-gray-600">{{ ref.data?.entity?.name }}</div>
            </div>
            <div class="flex-grow">
              <entity-form (submitForm)="submitEditEntityForm($event); ref.close()" [schema]="ref.data?.entity">
                <ui-button color="gray" (click)="ref.close()" label="Close"></ui-button>
              </entity-form>
              <!--              <pre>{{ ref.data | json }}</pre>-->
              <!--              <field-form [field]="ref.data" (submitForm)="submitForm($event, ref.data.type); ref.close()">-->
              <!--                <ui-button color="gray" (click)="ref.close()" label="Close"></ui-button>-->
              <!--              </field-form>-->
            </div>
          </div>
        </ng-template>
        <ng-template #createFieldTpl let-ref>
          <div class="flex-grow flex flex-col">
            <div class="text-lg font-semibold tracking-wider px-4 py-3 flex space-x-4 items-center justify-between">
              <div class="flex items-center space-x-4">
                <entity-field-icon [data]="ref.data?.type?.data" [field]="ref.data?.type?.field"></entity-field-icon>
                <div>Create Field</div>
              </div>
              <div class="font-light text-gray-600">{{ ref.data?.type?.name }}</div>
            </div>
            <div class="flex-grow">
              <field-form [field]="ref.data" (submitForm)="submitCreateFieldForm($event, ref.data.type); ref.close()">
                <ui-button color="gray" (click)="ref.close()" label="Close"></ui-button>
              </field-form>
            </div>
          </div>
        </ng-template>
        <ng-template #editFieldTpl let-ref>
          <div class="flex-grow flex flex-col">
            <div class="text-lg font-semibold tracking-wider px-4 py-3 flex space-x-4 items-center justify-between">
              <div class="flex items-center space-x-4">
                <entity-field-icon
                  [data]="ref.data?.field?.dataType"
                  [field]="ref.data?.field?.fieldType"
                ></entity-field-icon>
                <div>Edit Field</div>
              </div>
              <div class="font-light text-gray-600">{{ ref.data?.field?.name }}</div>
            </div>
            <div class="flex-grow">
              <field-form
                [field]="ref.data.field"
                (submitForm)="submitUpdateFieldForm(ref.data?.field?.id, $event); ref.close()"
              >
                <ui-button color="gray" (click)="ref.close()" label="Close"></ui-button>
              </field-form>
            </div>
          </div>
        </ng-template>
      </ng-container>
    </ng-container>
  `,
  providers: [SchemaEntityDetailStore],
})
export class SchemaEntityDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: SchemaEntityDetailStore, private readonly dialog: DialogService) {}

  openDialog(tpl: TemplateRef<any>, { entity, field, type }: { entity?: Entity; field?: Field; type?: FieldDataType }) {
    this.dialog.open(tpl, { data: { entity, field, type }, closeButton: false })
  }

  submitCreateFieldForm(
    { name, description, dataType, isName, isNullable }: CreateSchemaEntityFieldInput,
    type: FieldDataType,
  ) {
    this.store.createSchemaEntityFieldEffect({ name, description, dataType: type.data, isName, isNullable })
  }

  submitUpdateFieldForm(fieldId: string, { name, description, isName, isNullable }: UpdateSchemaEntityFieldInput) {
    this.store.updateSchemaEntityFieldEffect([fieldId, { name, description, isName, isNullable }])
  }

  submitEditEntityForm(input: any) {
    console.log({ input })
  }

  deleteField(field: Field) {
    if (confirm('Are you sure?')) {
      this.store.deleteSchemaEntityFieldEffect(field)
    }
  }
}
