import { Component } from '@angular/core'
import { DevFaqSectionStore } from './dev-faq-section.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="previewCode[0]"
        [codeObj]="vm.config.items"
      >
        <ui-faq-section
          [title]="vm.config.items.title"
          [description]="vm.config.items.description"
          [content]="vm.config.items.content"
          [faqStyle]="vm.config.items.faqStyle"
          [background]="vm.config.items.background"
        ></ui-faq-section>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFaqSectionStore],
})
export class DevFaqSectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFaqSectionStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiFaqSectionModule } from '@schema-driven/web/ui/faq-section'
        \n\n
        <ui-faq-section
        [title]="vm.config.items.title"
        [description]="vm.config.items.description"
        [content]="vm.config.items.content"
        [faqStyle]="vm.config.items.faqStyle"
        [background]="vm.config.items.background"
      ></ui-faq-section>
     \n\n
        title = ${JSON.stringify(result.config.items.title, null, '\t')}\n
      description = ${JSON.stringify(result.config.items.description, null, '\t')}\n
      content = ${JSON.stringify(result.config.items.content, null, '\t')}\n
      faqStyle = ${JSON.stringify(result.config.items.faqStyle, null, '\t')}\n
      background = ${JSON.stringify(result.config.items.background, null, '\t')}\n
      `,
      ]
    })
  }
}
