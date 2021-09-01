import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevStoreNavigationComponent } from './dev-store-navigation.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiStoreNavigationModule } from '@schema-driven/web/ui/store-navigation'

@NgModule({
  declarations: [DevStoreNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevStoreNavigationComponent }]),
    WebUiPreviewModule,
    WebUiPreviewModule,
    WebUiStoreNavigationModule,
  ],
})
export class DevStoreNavigationModule {}
