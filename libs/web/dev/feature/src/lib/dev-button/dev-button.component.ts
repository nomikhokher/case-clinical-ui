import { Component } from '@angular/core'
import { Variant } from '@schema-driven/web/ui/button'
import { DevButtonStore } from './dev-button.store'

@Component({
  template: `
    <ui-preview
      [title]="config.header"
      [directory]="config.directory"
      [component_inputs]="config.component_inputs"
      [component_outputs]="config.component_outputs"
    >
      <div class="flex flex-wrap space-x-3">
        <ng-container *ngFor="let button of config.buttons">
          <ui-button [label]="button.label" [variant]="button.variant"></ui-button>
        </ng-container>
      </div>
    </ui-preview>
  `,
  providers: [DevButtonStore],
})
export class DevButtonComponent {
  readonly vm$ = this.store.vm$

  config = {
    header: 'Buttons',
    directory: `libs/web/dev/feature/src/lib/dev-button/dev-button.component.ts`,
    buttons: [
      { label: 'Primary Button', variant: Variant.Primary },
      { label: 'Secondary Button', variant: Variant.Secondary },
      { label: 'White Button', variant: Variant.White },
      { label: 'Danger Button', variant: Variant.Danger },
    ],
    component_inputs: [
      { label: 'Label', prop: '[label]', description: 'The text displayed in the button', dataType: 'String' },
      { label: 'Size', prop: '[size]', description: 'Adjusts button size', dataType: 'Size' },
      { label: 'Variant', prop: '[variant]', description: 'Adjusts button color', dataType: 'Variant' },
    ],
    component_outputs: [
      { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
    ],
  }

  constructor(private readonly store: DevButtonStore) {}
  public codePreview = [
    ` import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Indigo" type="button" color="indigo"  textTransform='upperase'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="red" type="button" color="red"  textTransform='lowercase'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Gray" type="button" color="gray"  textTransform='capitalize'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button [disabled]="true" label="Disabled" type="button" color="red"  textTransform='normal-case'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Border 3D "type="button" color="green" border="border-b-4 border-green-900 rounded"  textTransform='normal-case'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Rounded Full " type="button" color="red" border="rounded-full"  textTransform='capitalize'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Transparent" type="button" color="transparent" border="border border-blue-500 hover:border-transparent text-blue-700 rounded"  textTransform='capitalize'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Icon on left" type="button" color="indigo" position="right"  textTransform='capitalize'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button label="Icon on Right" type="button" color="indigo" position="left"  textTransform='capitalize'></ui-button>`,
    `import { WebUiButtonModule } from '@schema-driven/web/ui/button'\n\n<ui-button  type="circlebtn" color="indigo"></ui-button>`,
  ]
}
