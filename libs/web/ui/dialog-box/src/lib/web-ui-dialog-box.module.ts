import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiDialogBoxComponent } from './web-ui-dialog-box.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiDialogBoxComponent],
  exports: [WebUiDialogBoxComponent],
})
export class WebUiDialogBoxModule {}
