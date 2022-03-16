import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileNftPreviewComponent } from './web-ui-mobile-nft-preview.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileNftPreviewComponent],
  exports: [WebUiMobileNftPreviewComponent],
})
export class WebUiMobileNftPreviewModule {}
