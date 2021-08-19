import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiPromoSectionComponent } from './web-ui-promo-section.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiPromoSectionComponent],
  exports: [WebUiPromoSectionComponent],
})
export class WebUiPromoSectionModule {}
