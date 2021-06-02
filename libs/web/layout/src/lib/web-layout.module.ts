import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiSidebarClassicModule } from '@schema-driven/web/ui/sidebar-classic'
import { WebUiSidebarClassyModule } from '@schema-driven/web/ui/sidebar-classy'
import { WebUiSidebarCompactModule } from '@schema-driven/web/ui/sidebar-compact'
import { WebUiSidebarDenseModule } from '@schema-driven/web/ui/sidebar-dense'
import { WebUiSidebarFuturisticModule } from '@schema-driven/web/ui/sidebar-futuristic'
import { WebUiSidebarThinModule } from '@schema-driven/web/ui/sidebar-thin'
import { WebUiStackedSimpleModule } from '@schema-driven/web/ui/stacked-simple'
import { WebUiStackedCenteredModule } from '@schema-driven/web/ui/stacked-centered'
import { WebUiStackedEnterpriseModule } from '@schema-driven/web/ui/stacked-enterprise'
import { WebUiStackedModernModule } from '@schema-driven/web/ui/stacked-modern'
import { WebLayoutComponent } from './web-layout.component'
import { WebUiSlideOverLayoutModule } from '@schema-driven/web/ui/slide-over-layout'
@NgModule({
  declarations: [WebLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebUiStackedModernModule,
    WebUiStackedEnterpriseModule,
    WebUiStackedCenteredModule,
    WebUiStackedSimpleModule,
    WebUiSidebarThinModule,
    WebUiSidebarFuturisticModule,
    WebUiSidebarDenseModule,
    WebUiSidebarCompactModule,
    WebUiSidebarClassyModule,
    WebUiSidebarClassicModule,
    WebUiSlideOverLayoutModule,
  ],
})
export class WebLayoutModule {}
