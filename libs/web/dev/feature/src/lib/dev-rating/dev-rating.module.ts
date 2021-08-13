import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevRatingComponent } from './dev-rating.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiRatingModule } from '@schema-driven/web/ui/rating'

@NgModule({
  declarations: [DevRatingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevRatingComponent }]),
    WebUiRatingModule,
    WebUiPreviewModule,
  ],
})
export class DevRatingModule {}
