import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPageHeadingsComponent } from './web-ui-page-headings.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiPageHeadingsComponent],
  exports: [WebUiPageHeadingsComponent],
})
export class WebUiPageHeadingsModule {}
