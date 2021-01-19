import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild, CanLoad, UrlTree } from '@angular/router'
import { Role } from '@metadata/web/core/data-access'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { WebAuthStore } from '../web-auth-data-access.store'

@Injectable()
export class IsAdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private readonly store: WebAuthStore) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.isAuthenticated()
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.isAuthenticated()
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.isAuthenticated()
  }

  private isAuthenticated(): Observable<boolean | UrlTree> {
    return this.store.user$.pipe(map((user) => user.role === Role.Admin))
  }
}
