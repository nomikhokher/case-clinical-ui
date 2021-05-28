import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarThinComponent } from './web-ui-sidebar-thin.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiSidebarThinComponent],
  exports: [WebUiSidebarThinComponent],
})
export class WebUiSidebarThinModule {}
