import { Component } from '@angular/core'
import { DevPageHeadingsStore } from './dev-page-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ng-template #headerControls>
          <ng-container>
            <ui-button label="Gray" type="button" color="gray"></ui-button>
          </ng-container>
        </ng-template>
        <ui-page-header [meta]="vm.items.meta" [controlsTemplate]="vm.items.headerControls"></ui-page-header>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPageHeadingsStore],
})
export class DevPageHeadingsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPageHeadingsStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPageHeadingsModule } from '@schema-driven/web/ui/page-headings' \n\n 
      
        <ng-template #headerControls>
          <ng-container>
            <ui-button label="Gray" type="button" color="gray"></ui-button>
          </ng-container>
        </ng-template>
        <div class="bg-white rounded-xl px-8 dark:bg-gray-700 shadow">
          <ui-page-header
            [meta]="vm.items.config.meta"
          ></ui-page-header>
        </div> \n\n
      
        meta = ${JSON.stringify(result.items.meta, null, '\t')}\n
        `,
      ]
    })
  }
}
