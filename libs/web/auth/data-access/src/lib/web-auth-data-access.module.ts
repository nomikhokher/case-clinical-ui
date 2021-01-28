import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IsAdminGuard } from './guards/is-admin.guard'
import { IsLoggedInGuard } from './guards/is-logged-in.guard'
import { WebAuthDataAccessService } from './web-auth-data-access.service'

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [WebAuthDataAccessService, IsAdminGuard, IsLoggedInGuard],
})
export class WebAuthDataAccessModule {}
