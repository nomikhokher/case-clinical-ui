import { Component } from '@angular/core'
import { DevStatsStore } from './dev-stats.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-stats/dev-stats.component.ts
      </code>
      <ui-preview [component_props]="[{ name: 'stats', value: stats }]" [code]="codePreview[0]">
        <ui-stats [stats]="stats"></ui-stats>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStatsStore],
})
export class DevStatsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStatsStore) {}

  public codePreview = [
    `import { WebUiStatsModule } from '@schema-driven/web/ui/stats'\n\n<ui-stats [stats]="stats"></ui-stats> \n\n stats = {
    title: 'Total Subscribers',
    border_none: 'last',
    values: {
      type: 'numeric',
      total: '',
      current: '897',
      previous: '70857',
      overwrite: true,
      difference: {
        numeric: 457,
        percentage: '12.2555',
        type: 'percentage',
      },
    },
    icon: 'user',
    link: '/',
  }
}`,
  ]

  public stats: any = {
    title: 'Total Subscribers',
    border_none: 'last',
    values: {
      type: 'numeric',
      total: '',
      current: '897',
      previous: '70857',
      overwrite: true,
      difference: {
        numeric: 457,
        percentage: '12.2555',
        type: 'percentage',
      },
    },
    icon: 'user',
    link: '/',
  }
}
