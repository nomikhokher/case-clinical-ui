import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileNftCreateComponent } from './web-ui-mobile-nft-create.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileNftCreateComponent],
  exports: [WebUiMobileNftCreateComponent],
})
export class WebUiMobileNftCreateModule {}
