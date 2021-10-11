import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { WebUiCodeComponent } from './web-ui-code.component'

@NgModule({
  declarations: [WebUiCodeComponent],
  imports: [CommonModule, RouterModule, NumberedCodeblockModule],
  exports: [WebUiCodeComponent],
})
export class WebUiCodeModule {}
