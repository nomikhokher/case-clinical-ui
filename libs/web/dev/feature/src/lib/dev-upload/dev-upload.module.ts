import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevUploadComponent } from './dev-upload.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiUploadModule } from '@schema-driven/web/ui/upload'

@NgModule({
  declarations: [DevUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevUploadComponent }]),
    WebUiPreviewModule,
    WebUiUploadModule,
  ],
})
export class DevUploadModule {}
