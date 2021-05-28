import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarClassicComponent } from './web-ui-sidebar-classic.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiSidebarClassicComponent],
  exports: [WebUiSidebarClassicComponent],
})
export class WebUiSidebarClassicModule {}
