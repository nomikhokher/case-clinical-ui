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
        [codeObj]="vm.config.items"
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

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiNewsletterModule } from '@schema-driven/web/ui/newsletter'' \n\n 
        <ui-newsletter
        [heading]="vm.config.items.heading"
        [description]="vm.config.items.description"
        [bgColor]="vm.config.items.bgColor"
        [buttonText]="vm.config.items.buttonText"
        [tagLine]="vm.config.items.tagLine"
      >
      </ui-newsletter>\n\n
      
        heading = ${JSON.stringify(result.config.items.heading, null, '\t')}\n
        description = ${JSON.stringify(result.config.items.description, null, '\t')}\n
        bgColor = ${JSON.stringify(result.config.items.bgColor, null, '\t')}\n
        buttonText = ${JSON.stringify(result.config.items.buttonText, null, '\t')}\n
        tagLine = ${JSON.stringify(result.config.items.tagLine, null, '\t')}\n
        `,
      ]
    })
  }
}
