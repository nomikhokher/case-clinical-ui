import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiTabComponent } from './web-ui-tab.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [WebUiTabComponent],
  exports: [WebUiTabComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
})
export class WebUiTabModule {}
