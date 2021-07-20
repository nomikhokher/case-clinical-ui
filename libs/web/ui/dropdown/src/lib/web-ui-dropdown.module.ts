import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiDropdownComponent } from './web-ui-dropdown.component'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  declarations: [WebUiDropdownComponent],
  exports: [WebUiDropdownComponent],
})
export class WebUiDropdownModule {}
