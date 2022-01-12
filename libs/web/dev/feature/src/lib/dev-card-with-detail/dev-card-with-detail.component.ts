import { Component } from '@angular/core'
import { DevCardWithDetailStore } from './dev-card-with-detail.store'

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
        [codeObj]="vm.config.items"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-card-with-detail
          [subTitle]="vm.config.items.subTitle"
          [description]="vm.config.items.description"
          [title]="vm.config.items.title"
          [buttons]="vm.config.items.buttons"
        >
        </ui-card-with-detail>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCardWithDetailStore],
})
export class DevCardWithDetailComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevCardWithDetailStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUiCard-with-detailModule } from '@schema-driven/web/ui/card-with-detail'\n
          <ui-card-with-detail
            [title]="vm.config.items.title"
            [subTitle]="vm.config.items.subTitle"
            [description]="vm.config.items.description"
        >
        </ui-card-with-detail>\n\n
      `,
      ]
    })
  }
}
