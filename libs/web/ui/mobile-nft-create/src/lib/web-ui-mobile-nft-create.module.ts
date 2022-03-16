import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileNftCreateComponent } from './web-ui-mobile-nft-create.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileNftCreateComponent],
  exports: [WebUiMobileNftCreateComponent],
})
export class WebUiMobileNftCreateModule {}
