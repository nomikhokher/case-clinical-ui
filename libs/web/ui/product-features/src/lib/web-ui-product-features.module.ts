import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProductFeaturesComponent } from './web-ui-product-features.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProductFeaturesComponent],
  exports: [WebUiProductFeaturesComponent],
})
export class WebUiProductFeaturesModule {}
