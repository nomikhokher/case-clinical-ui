import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileNftCompleteComponent } from './web-ui-mobile-nft-complete.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileNftCompleteComponent],
  exports: [WebUiMobileNftCompleteComponent],
})
export class WebUiMobileNftCompleteModule {}
