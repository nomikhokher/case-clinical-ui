import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiFileInputComponent } from './web-ui-file-input.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiFileInputComponent],
  exports: [WebUiFileInputComponent],
})
export class WebUiFileInputModule {}
