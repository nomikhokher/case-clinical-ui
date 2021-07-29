import { Component } from '@angular/core'
import { DevFooterStore } from './dev-footer.store'

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
        <ui-footer
          [bgColor]="vm.config.items.bgColor"
          [textColor]="vm.config.items.textColor"
          [lists]="vm.config.items.lists"
          [rights]="vm.config.items.rights"
          [icons]="vm.config.items.icons"
        ></ui-footer>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFooterStore],
})
export class DevFooterComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevFooterStore) {}

  public codePreview = [
    `import { WebUiFeedModule } from '@schema-driven/web/ui/feed' \n\n 
    <ui-feed 
      [bgColor]="vm.config.items.bgColor"
      [textColor]="vm.config.items.textColor"
      [lists]="vm.config.items.lists"
      [rights]="vm.config.items.rights"
      [icons]="vm.config.items.icons"
    >
    </ui-feed> \n\n
    bgColor: 'yellow',
    textColor: 'gray',
    {
      lists:[
        {
          heading:'SOLUTIONS',
          items:[
            {title:'Marketing'},
            {title:'Analytics'},
            {title:'Commerce'},
            {title:'Insights'},
          ]
        },
        {
          heading:'SUPPORT',
          items:[
            {title:'Pricing'},
            {title:'Documentation'},
            {title:'Guides'},
            {title:'API Status'},
          ]
        },
        {
          heading:'COMPANY',
          items:[
            {title:'About'},
            {title:'Blog'},
            {title:'Jobs'},
            {title:'Press'},
            {title:'Partners'},
          ]
        },
        {
          heading:'LEGAL',
          items:[
            {title:'Claim'},
            {title:'Privacy'},
            {title:'Terms'},
          ]
        },
      ],
      rights:'© 2020 Workflow, Inc. All rights reserved.',
      icons:[
        {
          svg:'github'
        },
        {
          svg:'facebook'
        },
        {
          svg:'twitter'
        },
        {
          svg:'instagram'
        },
        {
          svg:'dribble'
        },
      ]
    }
  `,
  ]
}
