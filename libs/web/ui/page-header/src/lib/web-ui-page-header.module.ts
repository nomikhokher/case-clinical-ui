import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiPageHeaderComponent } from './web-ui-page-header.component'

@NgModule({
  declarations: [WebUiPageHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiButtonModule, WebUiIconModule, WebUiBreadcrumbsModule],
  exports: [WebUiPageHeaderComponent],
})
export class WebUiPageHeaderModule {}
