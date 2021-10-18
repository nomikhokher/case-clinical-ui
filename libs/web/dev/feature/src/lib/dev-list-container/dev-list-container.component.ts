import { Component } from '@angular/core'
import { DevListContainerStore } from './dev-list-container.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [breadcrumbs]="vm.config.breadcrumbs"
        [directory]="vm.config.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-list-container
          [classNames]="vm.config.items.classNames"
          [roundedDividers]="vm.config.items.roundedDividers"
        >
          <ng-container class="content">
            <p class="p-4">Simple with dividers</p>
            <p class="p-4">Simple with dividers</p>
          </ng-container>
        </ui-list-container>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevListContainerStore],
})
export class DevListContainerComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevListContainerStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiListContainerModule } from '@schema-driven/web/ui/list-container'
        \n\n<ui-list-container [classNames]="''" [roundedDividers]="roundedDividers">
            <ng-container class="content">
              <p class="py-4">Simple with dividers</p>
              <p class="py-4">Simple with dividers</p>
            </ng-container>
        </ui-list-container>
        \n
        classNames = ${result.config.items.classNames},
        roundedDividers = ${result.config.items.roundedDividers},
        `,
      ]
    })
  }
}
