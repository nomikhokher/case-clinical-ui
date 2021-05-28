import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarClassyComponent } from './web-ui-sidebar-classy.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiSidebarClassyComponent],
  exports: [WebUiSidebarClassyComponent],
})
export class WebUiSidebarClassyModule {}
