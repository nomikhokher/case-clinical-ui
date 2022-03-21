import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchCreatorComponent } from './dev-mobile-search-creator.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevMobileSearchCreatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchCreatorComponent }]),
    WebUiPreviewModule,
  ],
})
export class DevMobileSearchCreatorModule {}
