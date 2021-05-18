import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiBreadcrumbsModule } from '@schema-driven/web/ui/breadcrumbs'
import { DevBreadcrumbsComponent } from './dev-breadcrumbs.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevBreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevBreadcrumbsComponent }]),
    WebUiBreadcrumbsModule,
    WebUiPreviewModule,
  ],
})
export class DevBreadcrumbsModule {}
