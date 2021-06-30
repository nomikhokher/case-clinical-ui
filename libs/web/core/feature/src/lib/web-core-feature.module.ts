import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { DialogModule } from '@ngneat/dialog'
import { WebUiToastModule } from '@schema-driven/web/ui/toast'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'

@NgModule({
  imports: [HttpClientModule, WebCoreFeatureGraphQLModule, DialogModule.forRoot(), WebUiToastModule],
})
export class WebCoreFeatureModule {}
