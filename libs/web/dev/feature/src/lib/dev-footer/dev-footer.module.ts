import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFooterComponent } from './dev-footer.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFooterModule } from '@schema-driven/web/ui/footer'

@NgModule({
  declarations: [DevFooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFooterComponent }]),
    WebUiPreviewModule,
    WebUiFooterModule,
  ],
})
export class DevFooterModule {}
