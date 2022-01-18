import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCollapseComponent } from './dev-collapse.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCollapseModule } from '@schema-driven/web/ui/collapse'

@NgModule({
  declarations: [DevCollapseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCollapseComponent }]),
    WebUiPreviewModule,
    WebUiCollapseModule,
  ],
})
export class DevCollapseModule {}
