import { Component } from '@angular/core'
import { DevStackedListsStore } from './dev-stacked-lists.store'
import { StackedList, TwoColumnStackedList } from './type.model'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-stacked-lists/dev-stacked-lists.component.ts
      </code>
    </ng-container>
    <ui-preview [component_inputs]="[{ name: 'stackedList', value: stackedList }]" [code]="codePreview[0]">
      <ui-narrow-avatar-list [stackedList]="stackedList"></ui-narrow-avatar-list>
    </ui-preview>

    <ui-preview
      [component_inputs]="[{ name: 'twoColumnStackedList', value: twoColumnStackedList }]"
      [code]="codePreview[1]"
    >
      <ui-two-column-stacked-list [twoColumnStackedList]="twoColumnStackedList"></ui-two-column-stacked-list>
    </ui-preview>
  `,
  providers: [DevStackedListsStore],
})
export class DevStackedListsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStackedListsStore) {}

  public codePreview = [
    `import { WebUiNarrowAvatarListModule } from '@schema-driven/web/ui/narrow-avatar-list'\n\n<ui-narrow-avatar-list [stackedList]="stackedList"></ui-narrow-avatar-list> \n\n stackedList = [
      {
        id: 1,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
      },
      {
        id: 2,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
      },
      {
        id: 3,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
      },
    ]`,
    `import { WebUiTwoColumnStackedListModule } from '@schema-driven/web/ui/two-column-stacked-list'\n\n<ui-two-column-stacked-list [twoColumnStackedList]="twoColumnStackedList"></ui-two-column-stacked-list>\n\n twoColumnStackedList = [
      {
        id: 1,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
      {
        id: 2,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
      {
        id: 3,
        name: 'Hammad Hassan',
        email: 'hh@yahoo.com',
        img: 'user',
        date: 'January 7, 2020',
        status: 'Completed phone screening',
      },
    ]`,
  ]

  public stackedList: StackedList[] = [
    {
      id: 1,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
    },
    {
      id: 2,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
    },
    {
      id: 3,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
    },
  ]

  public twoColumnStackedList: TwoColumnStackedList[] = [
    {
      id: 1,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
    {
      id: 2,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
    {
      id: 3,
      name: 'Hammad Hassan',
      email: 'hh@yahoo.com',
      img: 'user',
      date: 'January 7, 2020',
      status: 'Completed phone screening',
    },
  ]
}
