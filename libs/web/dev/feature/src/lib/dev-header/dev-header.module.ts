import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevHeaderComponent } from './dev-header.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiHeaderModule } from '@schema-driven/web/ui/header'

@NgModule({
  declarations: [DevHeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevHeaderComponent }]),
    WebUiPreviewModule,
    WebUiHeaderModule,
  ],
})
export class DevHeaderModule {}
