import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found.component'
import { WebUiWildcardPagesModule } from '@schema-driven/web/ui/wildcard-pages'

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
    WebUiWildcardPagesModule,
  ],
})
export class NotFoundModule {}
