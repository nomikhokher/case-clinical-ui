import { Component } from '@angular/core'
import { DevToastStore } from './dev-toast.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 flex space-x-6">
        <ui-preview [code]="codePreview[0]">
          <ng-container *ngFor="let demo of vm.demos">
            <ui-button color="indigo" [label]="demo.id" (handler)="demo.demo()"></ui-button>
          </ng-container>
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
