import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiStackedCenteredComponent } from './web-ui-stacked-centered.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, ClickOutsideModule, WebUiIconModule],
  declarations: [WebUiStackedCenteredComponent],
  exports: [WebUiStackedCenteredComponent],
})
export class WebUiStackedCenteredModule {}
