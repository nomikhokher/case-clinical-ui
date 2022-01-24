import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevListGroupComponent } from './dev-list-group.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiListGroupModule } from '@schema-driven/web/ui/list-group'
@NgModule({
  declarations: [DevListGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevListGroupComponent }]),
    WebUiPreviewModule,
    WebUiListGroupModule,
  ],
})
export class DevListGroupModule {}
