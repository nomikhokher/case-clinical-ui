import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevEditorComponent } from './dev-editor.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiEditorModule } from '@schema-driven/web/ui/editor'

@NgModule({
  declarations: [DevEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevEditorComponent }]),
    WebUiPreviewModule,
    WebUiEditorModule,
  ],
})
export class DevEditorModule {}
