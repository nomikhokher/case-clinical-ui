import { Component } from '@angular/core'
import { DevListContainerStore } from './dev-list-container.store'

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
        <ui-list-container [classNames]="vm.config.items.classNames" [roundedDividers]="">
          <ng-container class="roundedDividers">
            <p class="py-4">Simple with dividers</p>
            <p class="py-4">Simple with dividers</p>
          </ng-container>
        </ui-list-container>
      </ui-preview>
      <ui-preview [code]="codePreview[1]">
        <ui-list-container
          [classNames]="vm.config.items.classNames"
          [roundedDividers]="vm.config.items.roundedDividers"
        >
          <ng-container class="roundedDividersNot">
            <p class="py-4">Simple with dividers</p>
            <p class="py-4">Simple with dividers</p>
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
  public codePreview = [
    `import { WebUiListContainerModule } from '@schema-driven/web/ui/list-container'\n\n<ui-list-container [classNames]="''" [roundedDividers]="">
    <ng-container class="roundedDividers">
      <p class="py-4">Simple with dividers</p>
      <p class="py-4">Simple with dividers</p>
    </ng-container>
  </ui-list-container>`,
    `import { WebUiListContainerModule } from '@schema-driven/web/ui/list-container'\n\n<ui-list-container [classNames]="''" [roundedDividers]="roundedDividers">
    <ng-container class="roundedDividersNot">
      <p class="py-4">Simple with dividers</p>
      <p class="py-4">Simple with dividers</p>
    </ng-container>
  </ui-list-container> \n\n roundedDividers = true`,
  ]
}
