import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevWildcardPagesComponent } from './dev-wildcard-pages.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiWildcardPagesModule } from '@schema-driven/web/ui/wildcard-pages'

@NgModule({
  declarations: [DevWildcardPagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevWildcardPagesComponent }]),
    WebUiPreviewModule,
    WebUiWildcardPagesModule,
  ],
})
export class DevWildcardPagesModule {}
