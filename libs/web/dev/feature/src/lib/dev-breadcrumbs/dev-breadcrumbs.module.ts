import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'
import { DevBreadcrumbsComponent } from './dev-breadcrumbs.component'

@NgModule({
  declarations: [DevBreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevBreadcrumbsComponent }]),
    WebUiBreadcrumbsModule,
  ],
})
export class DevBreadcrumbsModule {}
