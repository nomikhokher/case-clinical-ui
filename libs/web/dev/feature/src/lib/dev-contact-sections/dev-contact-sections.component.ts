import { Component, Input } from '@angular/core'
import { DevContactSectionsStore } from './dev-contact-sections.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-contact-sections (save)="savedData($event)"></ui-contact-sections>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevContactSectionsStore],
})
export class DevContactSectionsComponent {
  s: boolean = true
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevContactSectionsStore) {}

  savedData(count: boolean) {
    console.log('lajfljaslf')
    return this.s
  }

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUicontactsectionsModule } from '@schema-driven/web/ui/contact-sections'\n
          <ui-contact-sections></ui-contact-sections>\n\n
      `,
      ]
    })
  }
}
