import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMediaObjectComponent } from './dev-media-object.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMediaObjectModule } from '@schema-driven/web/ui/media-object'

@NgModule({
  declarations: [DevMediaObjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMediaObjectComponent }]),
    WebUiPreviewModule,
    WebUiMediaObjectModule,
  ],
})
export class DevMediaObjectModule {}
