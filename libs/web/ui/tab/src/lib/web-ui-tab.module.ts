import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiTabComponent } from './web-ui-tab.component'

@NgModule({
  declarations: [WebUiTabComponent],
  exports: [WebUiTabComponent],
  imports: [CommonModule, RouterModule],
})
export class WebUiTabModule {}
