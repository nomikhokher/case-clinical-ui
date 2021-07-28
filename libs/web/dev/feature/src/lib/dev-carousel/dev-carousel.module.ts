import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCarouselComponent } from './dev-carousel.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCarouselModule } from '@schema-driven/web/ui/carousel'

@NgModule({
  declarations: [DevCarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCarouselComponent }]),
    WebUiPreviewModule,
    WebUiCarouselModule,
  ],
})
export class DevCarouselModule {}
