import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavbarsComponent } from './navbars.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiNavbarsModule } from '@schema-driven/web/ui/navbars'
@NgModule({
  declarations: [NavbarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NavbarsComponent }]),
    WebUiPreviewModule,
    WebUiNavbarsModule,
  ],
})
export class NavbarsModule {}
