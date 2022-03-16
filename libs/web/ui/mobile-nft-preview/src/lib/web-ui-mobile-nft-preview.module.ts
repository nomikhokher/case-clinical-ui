import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileNftPreviewComponent } from './web-ui-mobile-nft-preview.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileNftPreviewComponent],
  exports: [WebUiMobileNftPreviewComponent],
})
export class WebUiMobileNftPreviewModule {}
