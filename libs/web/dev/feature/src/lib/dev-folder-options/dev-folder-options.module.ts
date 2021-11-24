import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFolderOptionsComponent } from './dev-folder-options.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFolderOptionsModule } from '@schema-driven/web/ui/folder-options'

@NgModule({
  declarations: [DevFolderOptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFolderOptionsComponent }]),
    WebUiPreviewModule,
    WebUiFolderOptionsModule,
  ],
})
export class DevFolderOptionsModule {}
