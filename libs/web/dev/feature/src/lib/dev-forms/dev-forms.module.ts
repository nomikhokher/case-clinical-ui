import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { DevFormsComponent } from './dev-forms.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevFormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFormsComponent }]),
    WebUiFormModule,
    WebUiPreviewModule,
  ],
})
export class DevFormsModule {}
