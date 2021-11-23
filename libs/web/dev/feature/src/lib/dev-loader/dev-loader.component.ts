import { Component } from '@angular/core'
import { DevLoaderStore } from './dev-loader.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.config.items"
      >
        <ui-loader
          [size]="vm.config.items.size"
          [isLoading]="vm.config.items.isLoading"
          [loadingType]="vm.config.items.loadingType"
          [loaderColor]="vm.config.items.loaderColor"
        ></ui-loader>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevLoaderStore],
})
export class DevLoaderComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevLoaderStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiLoaderModule} from '@schema-driven/web/ui/loader'
        \n\n
        <ui-loader [size]="vm.config.items.size" [isLoading]="vm.config.items.isLoading" [loadingType]="vm.config.items.loadingType" [loaderColor]="vm.config.items.loaderColor"></ui-loader>
     \n\n
      isLoading = ${JSON.stringify(result.config.items.isLoading, null, '\t')}\n
      loadingType = ${JSON.stringify(result.config.items.loadingType, null, '\t')}\n
      loaderColor = ${JSON.stringify(result.config.items.loaderColor, null, '\t')}\n
      size = ${JSON.stringify(result.config.items.size, null, '\t')}\n
      `,
      ]
    })
  }
}
