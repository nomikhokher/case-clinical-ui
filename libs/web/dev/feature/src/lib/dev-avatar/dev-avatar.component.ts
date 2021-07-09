import { Component } from '@angular/core'
import { DevAvatarStore } from './dev-avatar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
      >
        <div class="inline-block mx-3" *ngFor="let item of vm.config.items">
          <ui-avatar
            [mode]="item.mode"
            [payload]="item.payload"
            [radius]="item.radius"
            [size]="item.size"
            [badge]="item.badge"
          ></ui-avatar>
        </div>
      </ui-preview>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-avatar/dev-avatar.component.ts
      </code>
    </ng-container>
  `,
  providers: [DevAvatarStore],
})
export class DevAvatarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAvatarStore) {}
  public codePreview = [
    `import { WebUiAvatarModule } from '@schema-driven/web/ui/avatar'\n\n<ui-avatar mode="img" [payload]="payload" radius="circle" [size]="14"></ui-avatar> \n\n payload ='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'`,
  ]
}
