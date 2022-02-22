import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileHomeComponent } from './web-ui-mobile-home.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileHomeComponent],
  exports: [WebUiMobileHomeComponent],
})
export class WebUiMobileHomeModule {}
