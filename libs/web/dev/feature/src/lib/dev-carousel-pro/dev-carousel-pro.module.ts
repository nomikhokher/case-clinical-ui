import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCarouselProComponent } from './dev-carousel-pro.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCarouselProModule } from '@schema-driven/web/ui/carousel-pro'

@NgModule({
  declarations: [DevCarouselProComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCarouselProComponent }]),
    WebUiPreviewModule,
    WebUiCarouselProModule,
  ],
})
export class DevCarouselProModule {}
