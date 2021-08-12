import { Component } from '@angular/core'
import { DevAccordionStore } from './dev-accordion.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-accordion [accordions]="vm.config.items.accordions"></ui-accordion>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevAccordionStore],
})
export class DevAccordionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAccordionStore) {}

  public codePreview = [
    `
 import { WebUiAccordionModule } from '@schema-driven/web/ui/accordion'\n\n
 <ui-accordion [accordions]="accordions"></ui-accordion>\n
  accordions =  [
    {
      id: '1',
      btnText: 'Collapsible Group Item #1',
      description: '
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
      officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
      wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
      you probably haven't heard of them accusamus labore sustainable VHS.',
      show: false,
      icon: 'chevronRight',
    },
    {
      id: '2',
      btnText: 'Collapsible Group Item #2',
      description: '
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
      officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
      wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
      you probably haven't heard of them accusamus labore sustainable VHS.',
      show: false,
      icon: 'chevronRight',
    },
    {
      id: '3',
      btnText: 'Collapsible Group Item #3',
      description: '
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
      officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
      wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
      you probably haven't heard of them accusamus labore sustainable VHS.',
      show: false,
    },
  ],
  `,
  ]
}
