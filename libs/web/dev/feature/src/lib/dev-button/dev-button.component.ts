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
    <h1>Simple Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[0]">
        <ui-button label="Indigo" type="button" color="indigo"></ui-button>
      </ui-preview>
    </div>

    <h1>Red Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[1]">
        <ui-button label="red" type="button" color="red"></ui-button>
      </ui-preview>
    </div>

    <h1>Gray Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[2]">
        <ui-button label="Gray" type="button" color="gray"></ui-button>
      </ui-preview>
    </div>

    <h1>Disabled Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[3]">
        <ui-button [disabled]="true" label="Disabled" type="button" color="red"></ui-button>
      </ui-preview>
    </div>
    <h1>3D Button</h1>
    <ui-preview [code]="codePreview[4]">
      <ui-button
        label="Border 3D "
        type="button"
        color="green"
        border="border-b-4 border-green-900 rounded"
      ></ui-button>
    </ui-preview>

    <h1>Pill Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[5]">
        <ui-button label="Rounded Full " type="button" color="red" border="rounded-full"></ui-button>
      </ui-preview>
    </div>

    <h1>Outline Button</h1>
    <div class="my-4">
      <ui-preview [code]="codePreview[6]">
        <ui-button
          label="Transparent"
          type="button"
          color="transparent"
          border="border border-blue-500 hover:border-transparent text-blue-700 rounded"
        ></ui-button>
      </ui-preview>
    </div>
  `,
  providers: [DevButtonStore],
})
export class DevButtonComponent {
  readonly vm$ = this.store.vm$

  public type = 'button'

  constructor(private readonly store: DevButtonStore) {}
  public codePreview = [
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Indigo" type="button" color="indigo"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="red" type="button" color="red"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Gray" type="button" color="gray"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button [disabled]="true" label="Disabled" type="button" color="red"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Border 3D "type="button" color="green" border="border-b-4 border-green-900 rounded"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Rounded Full " type="button" color="red" border="rounded-full"></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Transparent" type="button" color="transparent" border="border border-blue-500 hover:border-transparent text-blue-700 rounded"></ui-button>`,
  ]
}
