import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTestimonialsComponent } from './web-ui-testimonials.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiTestimonialsComponent],
  exports: [WebUiTestimonialsComponent],
})
export class WebUiTestimonialsModule {}
