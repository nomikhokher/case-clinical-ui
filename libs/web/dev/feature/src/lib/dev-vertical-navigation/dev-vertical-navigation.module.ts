import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevVerticalNavigationComponent } from './dev-vertical-navigation.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiVerticalNavigationModule } from '@schema-driven/web/ui/vertical-navigation'
import { DevVerticalNavigationStore } from './dev-vertical-navigation.store'

@NgModule({
  declarations: [DevVerticalNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevVerticalNavigationComponent }]),
    WebUiPreviewModule,
    WebUiVerticalNavigationModule,
  ],
  providers: [DevVerticalNavigationStore],
})
export class DevVerticalNavigationModule {}
