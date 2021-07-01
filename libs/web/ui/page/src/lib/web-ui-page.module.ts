import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageComponent } from './web-ui-page.component'
import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiPageHeaderModule } from '@schema-driven/web/ui/page-header'

@NgModule({
  declarations: [WebUiPageComponent],
  exports: [WebUiPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebUiBreadcrumbsModule,
    WebUiIconModule,
    WebUiIconModule,
    WebUiPageHeaderModule,
  ],
})
export class WebUiPageModule {}
