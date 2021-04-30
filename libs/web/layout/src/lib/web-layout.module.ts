import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebLayoutComponent } from './web-layout.component'
import { LayoutFooterModule } from './components/layout-footer/layout-footer.module'
import { LayoutHeaderModule } from './components/layout-header/layout-header.module'
import { LayoutWrapperModule } from './components/layout-wrapper/layout-wrapper.module'

@NgModule({
  declarations: [WebLayoutComponent],
  imports: [CommonModule, RouterModule, LayoutHeaderModule, LayoutFooterModule, LayoutWrapperModule],
})
export class WebLayoutModule {}
