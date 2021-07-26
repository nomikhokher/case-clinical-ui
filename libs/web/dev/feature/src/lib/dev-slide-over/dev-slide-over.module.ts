import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSlideOverComponent } from './dev-slide-over.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSlideOverModule } from '@schema-driven/web/ui/slide-over'
import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'

@NgModule({
  declarations: [DevSlideOverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSlideOverComponent }]),
    WebUiPreviewModule,
    WebUiSlideOverModule,
    WebUiSlideOverLayoutModule,
    WebUiButtonModule,
  ],
})
export class DevSlideOverModule {}
