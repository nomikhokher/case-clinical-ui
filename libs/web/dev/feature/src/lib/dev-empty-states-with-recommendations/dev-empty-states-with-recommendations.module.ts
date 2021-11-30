import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevEmptyStatesWithRecommendationsComponent } from './dev-empty-states-with-recommendations.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiEmptyStatesWithRecommendationsModule } from '@schema-driven/web/ui/empty-states-with-recommendations'

@NgModule({
  declarations: [DevEmptyStatesWithRecommendationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevEmptyStatesWithRecommendationsComponent }]),
    WebUiPreviewModule,
    WebUiEmptyStatesWithRecommendationsModule,
  ],
})
export class DevEmptyStatesWithRecommendationsModule {}
