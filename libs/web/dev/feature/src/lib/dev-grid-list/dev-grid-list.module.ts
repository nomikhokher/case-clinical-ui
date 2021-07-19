import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevGridListComponent } from './dev-grid-list.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiGridListModule } from '@schema-driven/web/ui/grid-list'

@NgModule({
  declarations: [DevGridListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevGridListComponent }]),
    WebUiPreviewModule,
    WebUiGridListModule,
  ],
})
export class DevGridListModule {}
