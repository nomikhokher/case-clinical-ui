import { Component } from '@angular/core'
import { DevDividerStore } from './dev-divider.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[1]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-divider-toolbar
          [dividerToolbars]="vm.config.items"
          [toolbar]="vm.config.items.toolbar"
          [directionToolbar]="vm.config.items.directionToolbar"
        >
          <ng-container id="toolbar">
            <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
              <button
                *ngFor="let icon of vm.config.items[0].icons"
                type="button"
                class="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <ui-icon size="lg" class="w-5 h-5" icon="{{ icon }}"></ui-icon>
              </button>
            </span>
          </ng-container>
        </ui-divider-toolbar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDividerStore],
})
export class DevDividerComponent {
  readonly vm$ = this.store.vm$
  public codePreview = [
    `import { WebUiDividerModule } from '@schema-driven/web/ui/divider' \n\n <ui-divider [dividers]="divider"></ui-divider>`,
    `import { WebUiDividerToolbarModule } from '@schema-driven/web/ui/divider-toolbar' \n\n <ui-divider-toolbar [dividerToolbars]="dividerToolbar">
    <ng-container id="toolbar">
      <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
        <ui-icon size="lg" class="w-5 h-5" [icon]="icon"></ui-icon>  
        </button>
      </span>
    </ng-container>
  </ui-divider-toolbar>`,
  ]
  // public divider = [
  //   {
  //     id: '1',
  //     label: 'Dome',
  //     title: false,
  //     icon: 'chevronRight',
  //     directionIcon: 'between', // you pass parameter 'start' or 'center' or 'end' or 'between'
  //   },
  // ]

  constructor(private readonly store: DevDividerStore) {}
}
