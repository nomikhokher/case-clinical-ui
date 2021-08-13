import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProductOverviewsComponent } from './web-ui-product-overviews.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProductOverviewsComponent],
  exports: [WebUiProductOverviewsComponent],
})
export class WebUiProductOverviewsModule {}
