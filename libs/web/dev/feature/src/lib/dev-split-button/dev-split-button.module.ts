import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSplitButtonComponent } from './dev-split-button.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSplitButtonModule } from '@schema-driven/web/ui/split-button'

@NgModule({
  declarations: [DevSplitButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSplitButtonComponent }]),
    WebUiPreviewModule,
    WebUiSplitButtonModule,
  ],
})
export class DevSplitButtonModule {}
