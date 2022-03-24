import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileDetailComponent } from './web-ui-mobile-detail.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileDetailComponent],
  exports: [WebUiMobileDetailComponent],
})
export class WebUiMobileDetailModule {}
