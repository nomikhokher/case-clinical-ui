import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevLoaderComponent } from './dev-loader.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiLoaderModule } from '@schema-driven/web/ui/loader'

@NgModule({
  declarations: [DevLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevLoaderComponent }]),
    WebUiPreviewModule,
    WebUiLoaderModule,
  ],
})
export class DevLoaderModule {}
