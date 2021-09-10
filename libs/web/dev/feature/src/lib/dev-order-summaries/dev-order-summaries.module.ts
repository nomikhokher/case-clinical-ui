import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevOrderSummariesComponent } from './dev-order-summaries.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiOrderSummariesModule } from '@schema-driven/web/ui/order-summaries'

@NgModule({
  declarations: [DevOrderSummariesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevOrderSummariesComponent }]),
    WebUiPreviewModule,
    WebUiOrderSummariesModule,
  ],
})
export class DevOrderSummariesModule {}
