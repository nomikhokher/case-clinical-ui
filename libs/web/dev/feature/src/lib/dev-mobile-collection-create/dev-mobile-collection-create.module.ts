import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCollectionCreateComponent } from './dev-mobile-collection-create.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileCollectionCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCollectionCreateComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileCollectionCreateModule {}
