import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiFileInputComponent } from './web-ui-file-input.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiFileInputComponent],
  exports: [WebUiFileInputComponent],
})
export class WebUiFileInputModule {}
