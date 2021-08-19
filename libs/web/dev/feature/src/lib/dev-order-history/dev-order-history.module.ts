import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevOrderHistoryComponent } from './dev-order-history.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiOrderHistoryModule } from '@schema-driven/web/ui/order-history'

@NgModule({
  declarations: [DevOrderHistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevOrderHistoryComponent }]),
    WebUiPreviewModule,
    WebUiOrderHistoryModule,
  ],
})
export class DevOrderHistoryModule {}
