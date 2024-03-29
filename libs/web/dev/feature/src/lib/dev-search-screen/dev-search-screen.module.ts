import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSearchScreenComponent } from './dev-search-screen.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSearchScreenComponent } from '@schema-driven/web/ui/search-screen'

@NgModule({
  declarations: [DevSearchScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSearchScreenComponent }]),
    WebUiPreviewModule,
    WebUiSearchScreenComponent,
  ],
})
export class DevSearchScreenModule {}
