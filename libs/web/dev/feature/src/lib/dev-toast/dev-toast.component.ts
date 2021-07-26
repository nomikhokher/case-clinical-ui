import { Component } from '@angular/core'
import { DevToastStore } from './dev-toast.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex space-x-6">
        <ui-preview
          [code]="codePreview[0]"
          [title]="vm.config.headerTitle"
          [githubURL]="vm.config.githubURL"
          [directory]="vm.config.directory"
          [breadcrumbs]="vm.config.breadcrumbs"
          [component_outputs]="vm.config.component_outputs"
          [component_inputs]="vm.config.component_inputs"
        >
          <div class="my-5">
            <h1>Toasts</h1>
            <ng-container *ngFor="let demo of vm.demos">
              <ui-button class="mx-2" color="indigo" [label]="demo.id" (handler)="demo.demo()"></ui-button>
            </ng-container>
          </div>
          <div class="my-5">
            <h1>Positions</h1>
            <ng-container *ngFor="let demo of vm.demos">
              <ui-button class="mx-1" color="indigo" [label]="demo.idp" (handler)="demo.demop()"></ui-button>
            </ng-container>
          </div>
          <div class="my-5">
            <h1>Durations</h1>
            <ng-container *ngFor="let demo of vm.demos">
              <ui-button class="mx-1" color="indigo" [label]="demo.idu" (handler)="demo.demodu()"></ui-button>
            </ng-container>
          </div>
        </ui-preview>
      </div>
    </ng-container>
  `,
  providers: [DevToastStore],
})
export class DevToastComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevToastStore) {}
  public codePreview = [
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n<ui-button color="indigo" [label]="show" (handler)="demo.demo()"></ui-button>`,
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n<ui-button color="indigo" [label]="error" (handler)="demo.demo()"></ui-button>`,
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n<ui-button color="indigo" [label]="warning" (handler)="demo.demo()"></ui-button>`,
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n<ui-button color="indigo" [label]="loading" (handler)="demo.demo()"></ui-button>`,
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n<ui-button color="indigo" [label]="Success" (handler)="demo.demo()"></ui-button>`,
  ]
}
