import { Component } from '@angular/core'
import { DevRadioGroupStore } from './dev-radio-group.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-radio-group
          [inlineDetail]="vm.config.items.inlineDetail"
          [inlineRadio]="vm.config.items.inlineRadio"
          [heading]="vm.config.items.heading"
          [radioButtons]="vm.config.items.radioButtons"
        ></ui-radio-group>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRadioGroupStore],
})
export class DevRadioGroupComponent {
  readonly vm$ = this.store.vm$
  codePreview
  constructor(private readonly store: DevRadioGroupStore) {}
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiRadioGroupModule } from '@schema-driven/web/ui/radio-group' \n\n 
        <ui-radio-group [inlineDetail]="vm.config.items.inlineDetail" [inlineRadio]="vm.config.items.inlineRadio" [heading]="vm.config.items.heading" [radioButtons]="vm.config.items.radioButtons"></ui-radio-group>
        \n\n
        
          heading: ${JSON.stringify(result.config.items.heading, null, '\t')}
          inlineRadio: ${JSON.stringify(result.config.items.inlineRadio, null, '\t')}
          inlineDetail:${JSON.stringify(result.config.items.inlineDetail, null, '\t')}
          radioButtons:${JSON.stringify(result.config.items.radioButtons, null, '\t')}
        `,
      ]
    })
  }
}
