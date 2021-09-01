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
        [codeObj]="vm.config.items[4]"
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
    </ng-container>
  `,
  providers: [DevAvatarStore],
})
export class DevAvatarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAvatarStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiAvatarModule } from '@schema-driven/web/ui/avatar' \n\n 
       <ui-avatar
       [mode]="item.mode"
       [payload]="item.payload"
       [radius]="item.radius"
       [size]="item.size"
       [badge]="item.badge"
     ></ui-avatar> \n\n
       
         mode = ${JSON.stringify(result.config.items[4].mode, null, '\t')}\n
         payload = ${JSON.stringify(result.config.items[4].payload, null, '\t')}\n
         radius = ${JSON.stringify(result.config.items[4].radius, null, '\t')}\n
         size = ${JSON.stringify(result.config.items[4].size, null, '\t')}\n
         badge = ${JSON.stringify(result.config.items[4].badge, null, '\t')}\n`,
      ]
    })
  }
}
