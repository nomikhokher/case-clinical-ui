import { ClipboardModule } from '@angular/cdk/clipboard'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiCodeComponent } from './web-ui-code.component'

@NgModule({
  declarations: [WebUiCodeComponent],
  imports: [CommonModule, RouterModule, NumberedCodeblockModule, ClipboardModule, WebUiIconModule],
  exports: [WebUiCodeComponent],
})
export class WebUiCodeModule {}
