import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTagTextareaComponent } from './dev-tag-textarea.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTagTextareaModule } from '@schema-driven/web/ui/tag-textarea'

@NgModule({
  declarations: [DevTagTextareaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTagTextareaComponent }]),
    WebUiPreviewModule,
    WebUiTagTextareaModule,
  ],
})
export class DevTagTextareaModule {}
