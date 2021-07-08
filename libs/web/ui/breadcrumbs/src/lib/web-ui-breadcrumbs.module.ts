import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiBreadcrumbsComponent } from './web-ui-breadcrumbs.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [WebUiBreadcrumbsComponent],
  exports: [WebUiBreadcrumbsComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
})
export class WebUiBreadcrumbsModule {}
