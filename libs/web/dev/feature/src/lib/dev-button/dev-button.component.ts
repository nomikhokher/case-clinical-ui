import { Component } from '@angular/core'
import { DevButtonStore } from './dev-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-button/dev-button.component.ts
      </code>
    </ng-container>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Simple Button</h1>
      <div class="my-4">
        <ui-button label="Indigo" type="button" color="indigo"></ui-button>
      </div>
    </ui-preview>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Red Button</h1>
      <div class="my-4">
        <ui-button label="red" type="button" color="red"></ui-button>
      </div>
    </ui-preview>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Gray Button</h1>

      <div class="my-4">
        <ui-button label="Gray" type="button" color="gray"></ui-button>
      </div>
    </ui-preview>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Disabled Button</h1>

      <div class="my-4">
        <ui-button [disabled]="true" label="Disabled" type="button" color="red"></ui-button>
      </div>
    </ui-preview>
    <h1>3D Button</h1>
    <ui-preview code="<ui-button></ui-button>">
      <ui-button
        label="Border 3D "
        type="button"
        color="green"
        border="border-b-4 border-green-900 rounded"
      ></ui-button>
    </ui-preview>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Pill Button</h1>

      <div class="my-4">
        <ui-button label="Rounded Full " type="button" color="red" border="rounded-full"></ui-button>
      </div>
    </ui-preview>

    <ui-preview code="<ui-button></ui-button>">
      <h1>Outline Button</h1>

      <div class="my-4">
        <ui-button
          label="Transparent"
          type="button"
          color="transparent"
          border="border border-blue-500 hover:border-transparent text-blue-700 rounded"
        ></ui-button>
      </div>
    </ui-preview>
  `,
  providers: [DevButtonStore],
})
export class DevButtonComponent {
  readonly vm$ = this.store.vm$

  public type = 'button'

  constructor(private readonly store: DevButtonStore) {}
}
