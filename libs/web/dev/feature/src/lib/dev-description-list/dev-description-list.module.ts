import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDescriptionListComponent } from './dev-description-list.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDescriptionListModule } from '@schema-driven/web/ui/description-list'

@NgModule({
  declarations: [DevDescriptionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDescriptionListComponent }]),
    WebUiPreviewModule,
    WebUiDescriptionListModule,
  ],
})
export class DevDescriptionListModule {}
