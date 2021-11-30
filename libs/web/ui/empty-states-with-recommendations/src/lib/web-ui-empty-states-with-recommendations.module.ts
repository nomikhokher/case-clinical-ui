import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiEmptyStatesWithRecommendationsComponent } from './web-ui-empty-states-with-recommendations.component'
import { WebUiInputSelectModule } from '@schema-driven/web/ui/input-select'
import { WebUiUserBadgeModule } from '@schema-driven/web/ui/user-badge'
@NgModule({
  imports: [CommonModule, RouterModule, WebUiInputSelectModule, WebUiUserBadgeModule],
  declarations: [WebUiEmptyStatesWithRecommendationsComponent],
  exports: [WebUiEmptyStatesWithRecommendationsComponent],
})
export class WebUiEmptyStatesWithRecommendationsModule {}
