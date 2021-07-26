import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiFaqSectionComponent } from './web-ui-faq-section.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiFaqSectionComponent],
  exports: [WebUiFaqSectionComponent],
})
export class WebUiFaqSectionModule {}
