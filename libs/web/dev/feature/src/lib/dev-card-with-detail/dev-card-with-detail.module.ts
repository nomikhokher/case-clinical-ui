import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCardWithDetailComponent } from './dev-card-with-detail.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCardWithDetailModule } from '@schema-driven/web/ui/card-with-detail'

@NgModule({
  declarations: [DevCardWithDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCardWithDetailComponent }]),
    WebUiPreviewModule,
    WebUiCardWithDetailModule,
  ],
})
export class DevCardWithDetailModule {}
