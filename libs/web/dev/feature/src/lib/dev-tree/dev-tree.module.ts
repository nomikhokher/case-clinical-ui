import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTreeComponent } from './dev-tree.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTreeModule } from '@schema-driven/web/ui/tree'

@NgModule({
  declarations: [DevTreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTreeComponent }]),
    WebUiTreeModule,
    WebUiPreviewModule,
  ],
  exports: [DevTreeComponent],
})
export class DevTreeModule {}
