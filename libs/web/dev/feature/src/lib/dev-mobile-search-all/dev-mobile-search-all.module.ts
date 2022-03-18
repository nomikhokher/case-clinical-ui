import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMobileSearchAllComponent } from './dev-mobile-search-all.component'
import { WebUiMobilePreviewModule } from '@schema-driven/web/ui/mobile-preview'
//import { WebUiMobileSearchAllModule } from '@schema-driven/web/ui/mobile-search-all'
@NgModule({
  declarations: [DevMobileSearchAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMobileSearchAllComponent }]),
    WebUiMobilePreviewModule,
    //  WebUiMobileSearchAllModule,
  ],
})
export class DevMobileSearchAllModule {}
