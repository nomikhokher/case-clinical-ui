import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProductQuickviewsComponent } from './web-ui-product-quickviews.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProductQuickviewsComponent],
  exports: [WebUiProductQuickviewsComponent],
})
export class WebUiProductQuickviewsModule {}
