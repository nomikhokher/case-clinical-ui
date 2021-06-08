import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPaginationComponent } from './dev-pagination.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPaginationModule } from '@schema-driven/web/ui/pagination'

@NgModule({
  declarations: [DevPaginationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPaginationComponent }]),
    WebUiPreviewModule,
    WebUiPaginationModule,
  ],
})
export class DevPaginationModule {}
