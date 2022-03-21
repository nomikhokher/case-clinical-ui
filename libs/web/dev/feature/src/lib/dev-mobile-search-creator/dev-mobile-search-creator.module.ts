import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchCreatorComponent } from './dev-mobile-search-creator.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
import { WebUiMobileSearchCreatorModule } from '@schema-driven/web/ui/mobile-search-creator'
@NgModule({
  declarations: [DevMobileSearchCreatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchCreatorComponent }]),
    WebUiMobilePreviewModule,
    WebUiMobileSearchCreatorModule,
  ],
})
export class DevMobileSearchCreatorModule {}
