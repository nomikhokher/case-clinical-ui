import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiDropdownButtonComponent } from './web-ui-dropdown-button.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiDropdownButtonComponent],
  exports: [WebUiDropdownButtonComponent],
})
export class WebUiDropdownButtonModule {}
