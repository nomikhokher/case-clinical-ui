import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UiIcon } from './enums/ui-icon.enum'
import { SvgIconRegistry, SvgIconsModule } from '@ngneat/svg-icon'
import { uiIconMap } from './constants/ui-icon.map'

@Component({
  selector: 'ui-icon',
  templateUrl: './web-ui-icon.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebUiIconComponent {
  @Input() icon!: UiIcon | string
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'md'
  @Input() class?: string

  constructor(readonly registry: SvgIconRegistry) {
    uiIconMap.forEach((data, name) => this.registry.register({ name, data }))
  }
}
