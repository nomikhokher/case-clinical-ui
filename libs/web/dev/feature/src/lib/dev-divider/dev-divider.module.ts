import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDividerComponent } from './dev-divider.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDividerModule } from '@schema-driven/web/ui/divider'
import { WebUiDividerToolbarModule } from '@schema-driven/web/ui/divider-toolbar'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [DevDividerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDividerComponent }]),
    WebUiPreviewModule,
    WebUiDividerModule,
    WebUiDividerToolbarModule,
    WebUiIconModule,
  ],
})
export class DevDividerModule {}
