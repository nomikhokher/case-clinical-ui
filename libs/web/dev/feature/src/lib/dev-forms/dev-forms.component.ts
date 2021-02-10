import { Component } from '@angular/core'
import { DevFormsStore } from './dev-forms.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-6">
        <ng-container *ngFor="let demo of vm.demos">
          <div>
            <div class="shadow rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <h1 class="p-4 bg-gray-700 text-xl md:text-1xl font-bold leading-tight ">
                {{ demo.name }}
              </h1>
              <div class="p-4">
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div>
                    <ui-form [model]="demo.model" [fields]="demo.fields"></ui-form>
                  </div>
                  <div>
                    <pre class="dark:bg-gray-900 rounded-md p-2 text-xs">{{ demo.model | json }}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [DevFormsStore],
})
export class DevFormsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFormsStore) {}
}
