import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTextareaComponent } from './dev-textarea.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevTextareaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTextareaComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevTextareaModule {}
