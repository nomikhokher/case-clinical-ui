import { Component } from '@angular/core'
import { DevSectionHeadingsStore } from './dev-section-headings.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-section-headings/dev-section-headings.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-section-headings [heading]="heading" [tabs]="tabs" [buttons]="buttons"></ui-section-headings>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSectionHeadingsStore],
})
export class DevSectionHeadingsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSectionHeadingsStore) {}

  public codePreview = [
    `import { WebUiSectionHeadingsModule } from '@schema-driven/web/ui/section-headings' \n\n 
    <ui-page-headings [heading]="heading" [tabs]="tabs" [buttons]="buttons"></ui-page-headings> \n\nheading=
      {
        title: 'Candidate',
        description: 'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.',
      }
    \n\ntabs=[
      {
        id: '1',
        title: 'Applied',
        active: false,
      },
      {
        id: '2',
        title: 'Phone Screening',
        active: false,
      },
      {
        id: '3',
        title: 'Interview',
        active: false,
      },
      {
        id: '4',
        title: 'Offer',
        active: false,
      },
      {
        id: '5',
        title: 'Hired',
        active: false,
      },
  ]\n\n
  buttons=[
    {
      text: 'Share',
      color: 'white',
      icon: 'phone',
      fontColor: 'gray-700',
      hoverColor: 'gray-50',
    },
    {
      text: 'Create',
      color: 'indigo-700',
      icon: 'email',
      fontColor: 'white',
      hoverColor: 'indigo-600',
    },
]
  `,
  ]

  public heading: Heading = {
    title: 'Candidate',
    // description: 'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.',
  }

  public tabs: TabLinks[] = [
    {
      id: '1',
      title: 'Applied',
      active: false,
    },
    {
      id: '2',
      title: 'Phone Screening',
      active: false,
    },
    {
      id: '3',
      title: 'Interview',
      active: false,
    },
    {
      id: '4',
      title: 'Offer',
      active: false,
    },
    {
      id: '5',
      title: 'Hired',
      active: false,
    },
  ]

  public buttons: Buttons[] = [
    {
      text: 'Share',
      color: 'white',
      icon: 'phone',
      fontColor: 'gray-700',
      hoverColor: 'gray-50',
    },
    {
      text: 'Create',
      color: 'indigo-700',
      icon: 'email',
      fontColor: 'white',
      hoverColor: 'indigo-600',
    },
  ]
}

export type Heading = { title: string; description?: string }

export type TabLinks = { id: string; title: string; active?: boolean }

export type Buttons = { text: string; color: string; fontColor?: string; icon?: string; hoverColor?: string }
