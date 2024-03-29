import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileHomeScrollComponent } from './web-ui-mobile-home-scroll.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileHomeScrollComponent],
  exports: [WebUiMobileHomeScrollComponent],
})
export class WebUiMobileHomeScrollModule {}
