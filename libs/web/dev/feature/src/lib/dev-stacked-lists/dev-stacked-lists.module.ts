import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevStackedListsComponent } from './dev-stacked-lists.component'
import { WebUiNarrowAvatarListModule } from '@schema-driven/web/ui/narrow-avatar-list'
import { WebUiTwoColumnStackedListModule } from '@schema-driven/web/ui/two-column-stacked-list'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevStackedListsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevStackedListsComponent }]),
    WebUiNarrowAvatarListModule,
    WebUiTwoColumnStackedListModule,
    WebUiPreviewModule,
  ],
})
export class DevStackedListsModule {}
