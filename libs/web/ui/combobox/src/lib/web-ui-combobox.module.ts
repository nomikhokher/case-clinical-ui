import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiComboboxComponent } from './web-ui-combobox.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiComboboxComponent],
  exports: [WebUiComboboxComponent],
})
export class WebUiComboboxModule {}
