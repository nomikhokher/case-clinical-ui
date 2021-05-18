import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebLayoutComponent } from './web-layout.component'
import { LayoutFooterModule } from './components/layout-footer/layout-footer.module'
import { EmptyHeaderLayoutModule } from './components/empty-header/empty-header.module'
import { ClassyHeaderLayoutModule } from './components/vertical-header/classy/classy-header.module'
import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'
import { ClassicHeaderLayoutModule } from './components/vertical-header/classic/classic-header.module'
import { ThinHeaderLayoutModule } from './components/vertical-header/thin/thin-header.module'
import { DenseHeaderLayoutModule } from './components/vertical-header/dense/dense-header.module'
import { CompactHeaderLayoutModule } from './components/vertical-header/compact/compact-header.module'
import { EnterpriseHeaderLayoutModule } from './components/horizontal-header/enterprise/enterprise-header.module'
import { CenteredHeaderLayoutModule } from './components/horizontal-header/centered/centered-header.module'
import { ModernHeaderLayoutModule } from './components/horizontal-header/modern/modern-header.module'
import { FuturisticHeaderLayoutModule } from './components/vertical-header/futuristic/futuristic-header.module'

@NgModule({
  declarations: [WebLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebUiSlideOverLayoutModule,
    LayoutFooterModule,
    EmptyHeaderLayoutModule,
    ClassyHeaderLayoutModule,
    ClassicHeaderLayoutModule,
    ThinHeaderLayoutModule,
    FuturisticHeaderLayoutModule,
    DenseHeaderLayoutModule,
    CompactHeaderLayoutModule,
    EnterpriseHeaderLayoutModule,
    ModernHeaderLayoutModule,
    CenteredHeaderLayoutModule,
  ],
})
export class WebLayoutModule {}
