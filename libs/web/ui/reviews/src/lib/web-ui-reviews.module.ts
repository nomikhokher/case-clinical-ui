import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiReviewsComponent } from './web-ui-reviews.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiReviewsComponent],
  exports: [WebUiReviewsComponent],
})
export class WebUiReviewsModule {}
