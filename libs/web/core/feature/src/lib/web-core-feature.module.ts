import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { DialogModule } from '@ngneat/dialog'
import { SvgIconsModule } from '@ngneat/svg-icon'
import { WebUiToastModule } from '@schema-driven/web/ui/toast'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [
    HttpClientModule,
    WebCoreFeatureGraphQLModule,
    SvgIconsModule.forRoot(),
    DialogModule.forRoot(),
    WebUiToastModule,
  ],
})
export class WebCoreFeatureModule {}
