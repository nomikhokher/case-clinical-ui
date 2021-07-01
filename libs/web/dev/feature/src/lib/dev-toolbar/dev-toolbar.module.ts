import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevToolbarComponent } from './dev-toolbar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiToolbarModule } from '@schema-driven/web/ui/toolbar'

@NgModule({
  declarations: [DevToolbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevToolbarComponent }]),
    WebUiPreviewModule,
    WebUiToolbarModule,
  ],
})
export class DevToolbarModule {}
