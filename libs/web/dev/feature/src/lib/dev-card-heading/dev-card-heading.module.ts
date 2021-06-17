import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCardHeadingComponent } from './dev-card-heading.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCardHeadingModule } from '@schema-driven/web/ui/card-heading'

@NgModule({
  declarations: [DevCardHeadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCardHeadingComponent }]),
    WebUiPreviewModule,
    WebUiCardHeadingModule,
  ],
})
export class DevCardHeadingModule {}
