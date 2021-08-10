import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTagTextareaComponent } from './web-ui-tag-textarea.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiTagTextareaComponent],
  exports: [WebUiTagTextareaComponent],
})
export class WebUiTagTextareaModule {}
