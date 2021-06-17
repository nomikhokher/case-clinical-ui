import { Component } from '@angular/core'
import { DevCardHeadingStore } from './dev-card-heading.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-card-heading/dev-card-heading.component.ts
      </code>
      <ui-preview>
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
        <ui-card-heading [sectionToggle]="false" [profile]="profile" [buttons]="buttons"></ui-card-heading>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCardHeadingStore],
})
export class DevCardHeadingComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCardHeadingStore) {}

  public profile: ProfileLink = {
    title: 'Tom Cook',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tagLine: '@tom_cook',
    icon: 'user',
  }

  public buttons: Button[] = [
    {
      text: 'Phone',
      color: 'white',
      icon: 'phone',
      fontColor: 'gray-700',
    },
    {
      text: 'Email',
      color: 'white',
      icon: 'email',
      fontColor: 'gray-700',
    },
  ]
}

export type ProfileLink = { title: string; image?: string; tagLine?: string; icon?: string }

export type Button = { text: string; color: string; fontColor?: string; icon?: string }
