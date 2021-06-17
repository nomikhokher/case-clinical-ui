import { Component } from '@angular/core'
import { DevContainerStore } from './dev-container.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-container/dev-container.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
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
