import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileProfileComponent } from './web-ui-mobile-profile.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileProfileComponent],
  exports: [WebUiMobileProfileComponent],
})
export class WebUiMobileProfileModule {}
