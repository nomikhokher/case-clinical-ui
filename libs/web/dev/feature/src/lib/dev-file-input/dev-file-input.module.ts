import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFileInputComponent } from './dev-file-input.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFileInputModule } from '@schema-driven/web/ui/file-input'
@NgModule({
  declarations: [DevFileInputComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFileInputComponent }]),
    WebUiPreviewModule,
    WebUiFileInputModule,
  ],
})
export class DevFileInputModule {}
