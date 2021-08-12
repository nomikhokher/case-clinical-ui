import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTooltipComponent } from './dev-tooltip.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTooltipModule } from '@schema-driven/web/ui/tooltip'

@NgModule({
  declarations: [DevTooltipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTooltipComponent }]),
    WebUiPreviewModule,
    WebUiTooltipModule,
  ],
})
export class DevTooltipModule {}
