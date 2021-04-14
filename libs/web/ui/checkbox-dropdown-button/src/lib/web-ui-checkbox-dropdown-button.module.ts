import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCheckboxDropdownButtonComponent } from './web-ui-checkbox-dropdown-button.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiCheckboxDropdownButtonComponent],
  exports: [WebUiCheckboxDropdownButtonComponent],
})
export class WebUiCheckboxDropdownButtonModule {}
