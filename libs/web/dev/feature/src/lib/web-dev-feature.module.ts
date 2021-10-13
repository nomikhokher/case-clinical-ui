import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiMainPageModule } from '@schema-driven/web/ui/main-page'
import { WebDevFeatureComponent } from './web-dev-feature.component'
import { routes } from './web-dev-route.module'

@NgModule({
  declarations: [WebDevFeatureComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiMainPageModule],
})
export class WebDevFeatureModule {}
