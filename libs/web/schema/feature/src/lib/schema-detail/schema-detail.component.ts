import { Component, TemplateRef } from '@angular/core'
import { DialogService } from '@ngneat/dialog'
import { SchemaDetailStore } from './schema-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.errors">
        <pre class="bg-gray-300 text-red-800 rounded-md p-4">{{ vm.errors | json }}</pre>
      </ng-container>
      <ng-container *ngIf="!vm.errors">
        <ui-page-header
          [title]="'Schema Details: ' + vm?.schema?.name || ''"
          linkPath=".."
          linkTitle="Back"
        ></ui-page-header>

        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside class="py-3 md:py-6 md:px-2 lg:py-0 lg:px-0 lg:col-span-3">
            <nav class="space-y-1 md:space-y-3">
              <div
                class="dark:bg-gray-800 dark:text-gray-400 text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center justify-between font-medium"
              >
                <span class="truncate"> Entities </span>
                <button class="flex items-center space-x-1" (click)="openDialog(modalTpl)">
                  <ui-icon icon="plusCircle"></ui-icon>
                  <span class="text-sm">Add</span>
                </button>
              </div>

              <ng-container *ngFor="let entity of vm.schema?.entities">
                <a
                  routerLinkActive="bg-gray-50 dark:bg-gray-700 text-pink-600 dark:text-pink-600 hover:bg-white"
                  [routerLink]="entity.id"
                  class="dark:bg-gray-800 dark:text-gray-400 text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center font-medium"
                >
                  <ui-icon icon="table"></ui-icon>
                  <span class="ml-2 truncate">
                    {{ entity.name }}
                  </span>
                </a>
              </ng-container>
            </nav>
          </aside>

          <div class="md:px-2 lg:px-0 lg:col-span-9">
            <router-outlet></router-outlet>
          </div>
        </div>
      </ng-container>
    </ng-container>

    <ng-template #modalTpl let-ref>
      <div class="p-2 pt-10 flex-grow flex">
        <div class="flex-grow flex flex-col">
          <div class="flex-grow">
            <div class="text-gray-500">TBD: Add Entity Form</div>
          </div>
          <div class="text-right">
            <ui-button (click)="ref.close()" label="Close"></ui-button>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  providers: [SchemaDetailStore],
})
export class SchemaDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: SchemaDetailStore, private readonly dialog: DialogService) {}

  openDialog(tpl: TemplateRef<any>) {
    this.dialog.open(tpl)
  }
}
