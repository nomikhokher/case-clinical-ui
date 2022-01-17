import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiCollapseComponent } from './web-ui-collapse.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiCollapseComponent],
  exports: [WebUiCollapseComponent],
})
export class WebUiCollapseModule {}
