import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileCollectionComponent } from './dev-mobile-collection.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileCollectionComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileCollectionModule {}
