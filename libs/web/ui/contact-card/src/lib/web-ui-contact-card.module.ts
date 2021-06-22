import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiContactCardComponent } from './web-ui-contact-card.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiContactCardComponent],
  exports: [WebUiContactCardComponent],
})
export class WebUiContactCardModule {}
