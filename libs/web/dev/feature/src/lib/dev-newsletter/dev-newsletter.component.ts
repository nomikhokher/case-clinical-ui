import { Component } from '@angular/core'
import { DevNewsletterStore } from './dev-newsletter.store'

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
        <ui-newsletter
          [heading]="vm.config.items.heading"
          [description]="vm.config.items.description"
          [bgColor]="vm.config.items.bgColor"
          [buttonText]="vm.config.items.buttonText"
          [tagLine]="vm.config.items.tagLine"
        >
        </ui-newsletter>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevNewsletterStore],
})
export class DevNewsletterComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevNewsletterStore) {}

  public codePreview = [
    `import { WebUiNewsletterModule } from '@schema-driven/web/ui/newsletter' \n\n 
    <ui-newsletter 
      [heading]="vm.config.items.heading" 
      [description]="vm.config.items.description" 
      [bgColor]="vm.config.items.bgColor"
      [buttonText]="vm.config.items.buttonText"
      [tagLine]="vm.config.items.tagLine">
    </ui-newsletter> \n\n
    {
      heading:'Sign up for our newsletter',
      description:'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat.',
      bgColor:'indigo',
      buttonText:'Notify me',
      tagLine:'We care about the protection of your data. Read our',
    }`,
  ]
}
