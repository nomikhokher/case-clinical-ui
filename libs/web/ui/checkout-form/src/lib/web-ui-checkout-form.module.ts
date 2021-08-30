import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { WebUiCheckoutFormComponent } from './web-ui-checkout-form.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiFormModule],
  declarations: [WebUiCheckoutFormComponent],
  exports: [WebUiCheckoutFormComponent],
})
export class WebUiCheckoutFormModule {}
