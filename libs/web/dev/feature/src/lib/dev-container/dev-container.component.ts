import { Component } from '@angular/core'
import { DevContainerStore } from './dev-container.store'

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
        <ui-container [containerWidth]="'container'" [containerPadding]="'p-4'" [narrowContainer]="narrowContainer">
          <div class="max-w-3xl mx-auto" id="narrowContainer">Narrow constrained with padded content</div>
          <div id="withoutNarrowContainer">Full-width on mobile, constrained with padded content above</div>
        </ui-container>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevContainerStore],
})
export class DevContainerComponent {
  readonly vm$ = this.store.vm$
  public readonly narrowContainer: boolean = false
  constructor(private readonly store: DevContainerStore) {}
  public codePreview = [
    `import { WebUiContainerModule } from '@schema-driven/web/ui/container'\n\n<ui-container [containerWidth]="'container'" [containerPadding]="'p-4'" [narrowContainer]="narrowContainer">
    <div class="max-w-3xl mx-auto" id="narrowContainer">Narrow constrained with padded content</div>
    <div id="withoutNarrowContainer">Full-width on mobile, constrained with padded content above</div>
  </ui-container> \n\n public readonly narrowContainer: boolean = false`,
  ]
}
