import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiStackedModernComponent } from './web-ui-stacked-modern.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiStackedModernComponent],
  exports: [WebUiStackedModernComponent],
})
export class WebUiStackedModernModule {}
