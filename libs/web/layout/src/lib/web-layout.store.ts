import { Injectable } from '@angular/core'
import { WebAuthStore } from '@metadata/web/auth/data-access'
import { Role } from '@metadata/web/core/data-access'
import { ComponentStore } from '@ngrx/component-store'

export interface WebLayoutLink {
  label: string
  route: string
}

interface WebLayoutState {
  logo: string
  name: string
  footer: string
}

@Injectable()
export class WebLayoutStore extends ComponentStore<WebLayoutState> {
  constructor(private readonly auth: WebAuthStore) {
    super({
      logo: '/assets/images/logo.png',
      name: 'Schema Driven',
      footer: `Copyright &copy; ${new Date().getFullYear()}`,
    })
  }

  readonly links$ = this.select(this.auth.user$, (user) =>
    [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'User', route: '/admin/users', admin: true },
      { label: 'Tenants', route: '/admin/tenants', admin: true },
    ].filter((item) => (item?.admin === true ? user.role === Role.Admin : true)),
  )
  readonly profile$ = this.select(this.auth.user$, (user) =>
    [
      { label: 'About', route: '/about', admin: false },
      { label: 'Logout', route: '/logout' },
    ].filter((item) => (item?.admin === true ? user.role === Role.Admin : true)),
  )
  readonly brand$ = this.select(({ logo, footer, name }) => ({ logo, footer, name }))
  readonly vm$ = this.select(
    this.auth.user$,
    this.links$,
    this.profile$,
    this.brand$,
    (user, links, profile, brand) => ({
      user,
      links,
      profile,
      brand,
    }),
  )
}

// { label: string; route: string }[] = [
// ]
// linksRight: { label: string; route: string }[] = [
//   { label: 'About', route: '/about' },
//   { label: 'Logout', route: '/logout' },
// ]
