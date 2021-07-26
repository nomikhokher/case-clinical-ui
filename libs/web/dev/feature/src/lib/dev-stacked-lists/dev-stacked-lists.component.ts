import { Component } from '@angular/core'
import { DevStackedListsStore } from './dev-stacked-lists.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [component_inputs]="[{ name: 'twoColumnStackedList', value: twoColumnStackedList }]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
      >
        <div *ngFor="let item of vm.config.items">
          <ui-two-column-stacked-list
            [twoColumnStackedList]="item.twoColumnStackedList"
            [id]="item.id"
            [name]="item.name"
            [email]="item.email"
            [img]="item.img"
            [date]="item.date"
            [status]="item.status"
          ></ui-two-column-stacked-list>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStackedListsStore],
})
export class DevStackedListsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStackedListsStore) {}

  public codePreview = [
    `import { WebUiTwoColumnStackedListModule } from '@schema-driven/web/ui/two-column-stacked-list'\n\n<ui-two-column-stacked-list [twoColumnStackedList]="twoColumnStackedList"></ui-two-column-stacked-list>\n\n twoColumnStackedList = [
      {
        twoColumnStackedList: true,
        id: 1,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
      {
        twoColumnStackedList: true,
        id: 2,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
      {
        twoColumnStackedList: false,
        id: 3,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
    ]`,
  ]
}
