import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiSidebarFuturisticComponent } from './web-ui-sidebar-futuristic.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiSidebarFuturisticComponent],
  exports: [WebUiSidebarFuturisticComponent],
})
export class WebUiSidebarFuturisticModule {}
