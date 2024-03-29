import { Component } from '@angular/core'
import { DevToastStore } from './dev-toast.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
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
          <h1 class="dark:text-gray-100 font-bold py-3 text-2xl">Toasts</h1>
          <ng-container *ngFor="let demo of vm.demos">
            <ui-button class="mx-2" color="indigo" [label]="demo.id" (handler)="demo.demo()"></ui-button>
          </ng-container>

          <h1 class="dark:text-gray-100 font-bold py-3 text-2xl">Positions</h1>
          <ng-container *ngFor="let demo of vm.demos">
            <ui-button class="mx-1" color="indigo" [label]="demo.idp" (handler)="demo.demop()"></ui-button>
          </ng-container>

          <h1 class="dark:text-gray-100 font-bold py-3 text-2xl">Durations</h1>
          <ng-container *ngFor="let demo of vm.demos">
            <ui-button class="mx-1" color="indigo" [label]="demo.idu" (handler)="demo.demodu()"></ui-button>
          </ng-container>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevToastStore],
})
export class DevToastComponent {
  public codePreview
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevToastStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiButtonModule } from '@schema-driven/web/ui/button' \n\n 
        <ui-button color="indigo" [label]="show" (handler)="demo.demo()"></ui-button>\n\n
        {
          color: indigo
          label: show
          handler: demo.demo()
        }`,
      ]
    })
  }
}
