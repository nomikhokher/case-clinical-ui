import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiLayoutModule } from '@schema-driven/web/ui/layout'
import { DevLayoutComponent } from './dev-layout.component'

@NgModule({
  declarations: [DevLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevLayoutComponent,
      },
    ]),
    WebUiLayoutModule,
    WebUiCodeModule,
  ],
})
export class DevLayoutModule {}
