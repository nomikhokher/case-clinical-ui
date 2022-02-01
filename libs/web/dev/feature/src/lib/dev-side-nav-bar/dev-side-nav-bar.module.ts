import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSideNavBarComponent } from './dev-side-nav-bar.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSideNavBarModule } from '@schema-driven/web/ui/side-nav-bar'
@NgModule({
  declarations: [DevSideNavBarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSideNavBarComponent }]),
    WebUiPreviewModule,
    WebUiSideNavBarModule,
  ],
})
export class DevSideNavBarModule {}
