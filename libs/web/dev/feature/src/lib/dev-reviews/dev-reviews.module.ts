import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevReviewsComponent } from './dev-reviews.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiReviewsModule } from '@schema-driven/web/ui/reviews'

@NgModule({
  declarations: [DevReviewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevReviewsComponent }]),
    WebUiPreviewModule,
    WebUiReviewsModule,
  ],
})
export class DevReviewsModule {}
