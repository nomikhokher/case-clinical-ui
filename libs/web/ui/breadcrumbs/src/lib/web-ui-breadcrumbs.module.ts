import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiBreadcrumbsComponent } from './web-ui-breadcrumbs.component'

@NgModule({
  declarations: [WebUiBreadcrumbsComponent],
  exports: [WebUiBreadcrumbsComponent],
  imports: [CommonModule, RouterModule],
})
export class WebUiBreadcrumbsModule {}
