import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiNewsletterComponent } from './web-ui-newsletter.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiNewsletterComponent],
  exports: [WebUiNewsletterComponent],
})
export class WebUiNewsletterModule {}
