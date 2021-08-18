import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiProductListComponent } from './web-ui-product-list.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiProductListComponent],
  exports: [WebUiProductListComponent],
})
export class WebUiProductListModule {}
