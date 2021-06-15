import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { VerticalNavigationComponent } from './vertical-navigation.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiVerticalNavigationModule } from '@schema-driven/web/ui/vertical-navigation'
@NgModule({
  declarations: [VerticalNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VerticalNavigationComponent }]),
    WebUiPreviewModule,
    WebUiVerticalNavigationModule,
  ],
})
export class VerticalNavigationModule {}
