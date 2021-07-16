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
  public previewCode = [
    `import {WebUiFaqSectionModule} from '@schema-driven/web/ui/faq-section' \n\n
   title = 'Frequently asked questions',\n
    description = 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur.',\n
    faqStyle = 'hidden', // faqStyle should must be one of them [sideByside, show, hidden]\n
    background = 'gray',\n
    content : [
      {question: 'How do you make holy water?', answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat'},
      {question: "What's the best thing about Switzerland?", answer :"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat"},
      {question: "What do you call someone with no body and no nose?", answer :"Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
      {question: "Why do you never see elephants hiding in trees?", answer :"Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},
    ]
   `,
  ]
}
