import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiHeaderComponent } from './web-ui-header.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiHeaderComponent],
  exports: [WebUiHeaderComponent],
})
export class WebUiHeaderModule {}
