import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevStepComponent } from './dev-step.component'
import { WebUiStepModule } from '@schema-driven/web/ui/step'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [DevStepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevStepComponent }]),
    WebUiStepModule,
    WebUiCodeModule,
    WebUiPreviewModule,
    WebUiAlertModule,
    WebUiIconModule,
  ],
})
export class DevStepModule {}
