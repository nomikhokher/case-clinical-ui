import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiOrderSummariesComponent } from './web-ui-order-summaries.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiOrderSummariesComponent],
  exports: [WebUiOrderSummariesComponent],
})
export class WebUiOrderSummariesModule {}
