import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiOrderHistoryComponent } from './web-ui-order-history.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiOrderHistoryComponent],
  exports: [WebUiOrderHistoryComponent],
})
export class WebUiOrderHistoryModule {}
