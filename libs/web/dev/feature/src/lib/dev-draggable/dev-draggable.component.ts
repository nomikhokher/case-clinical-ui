import { Component } from '@angular/core'
import { DevDraggableStore } from './dev-draggable.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [codeObj]="vm.config.items"
      >
        <ui-draggable [draggableData]="vm.config.items.draggableData"></ui-draggable>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDraggableStore],
})
export class DevDraggableComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDraggableStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiDraggableModule } from '@schema-driven/web/ui/draggable'
        \n\n
        <ui-draggable [draggableData]="vm.config.items.draggableData"></ui-draggable>
      \n\n
      draggableData = ${JSON.stringify(result.config.items.draggableData, null, '\t')}\n
      `,
      ]
    })
  }
}
