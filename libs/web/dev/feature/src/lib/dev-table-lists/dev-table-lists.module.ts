import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTableListsComponent } from './dev-table-lists.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTableListsModule } from '@schema-driven/web/ui/table-lists'

@NgModule({
  declarations: [DevTableListsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTableListsComponent }]),
    WebUiPreviewModule,
    WebUiTableListsModule,
  ],
})
export class DevTableListsModule {}
