import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchComponent } from './dev-mobile-search.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'

@NgModule({
  declarations: [DevMobileSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchComponent }]),
    WebUiMobilePreviewModule,
  ],
})
export class DevMobileSearchModule {}
