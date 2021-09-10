import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCheckoutFormComponent } from './dev-checkout-form.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCheckoutFormModule } from '@schema-driven/web/ui/checkout-form'

@NgModule({
  declarations: [DevCheckoutFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCheckoutFormComponent }]),
    WebUiPreviewModule,
    WebUiCheckoutFormModule,
  ],
})
export class DevCheckoutFormModule {}
