import { Injectable } from '@angular/core'
import { WebAuthStore } from '@schema-driven/web/auth/data-access'
import { Role } from '@schema-driven/web/core/data-access'
import { ComponentStore } from '@ngrx/component-store'

export interface WebLayoutLink {
  title?: string
  subTitle?: string
  label?: string
  route?: string
  role?: Role
  icon?: string
  dropDown?: boolean
  children?: {
    dropDown?: boolean
    label: string
    route?: string
    role?: Role
    icon?: string
    children?: {
      dropDown?: boolean
      label: string
      route?: string
      role?: Role
      children?: {
        dropDown?: boolean
        label: string
        route?: string
        role?: Role
      }[]
    }[]
  }[]
}

export interface WebLayoutState {
  theme: 'dark' | 'light' | 'auto'
  logo: string
  footerHtml: string
  links: WebLayoutLink[]
  profileLinks: WebLayoutLink[]
}

@Injectable()
export class WebLayoutStore extends ComponentStore<WebLayoutState> {
  constructor(private readonly authStore: WebAuthStore) {
    super({
      theme: 'light',
      logo: '/assets/images/logo.png',
      footerHtml: `Schema-Driven &copy; ${new Date().getFullYear()}`,
      links: [
        { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
        { label: 'Components', route: '/dev', role: Role.Admin, icon: 'development' },
      ],
      profileLinks: [
        { label: 'Your Account', route: '/account', icon: 'account' },
        { label: 'Admin', route: '/admin', role: Role.Admin, icon: 'user' },
        { label: 'About', route: '/about', icon: 'about' },
        { label: 'Logout', route: '/logout', icon: 'logout' },
      ],
    })
  }

  readonly user$ = this.authStore.user$

  readonly links$ = this.select(this.authStore.user$, this.state$, (user, state) => ({
    main: state.links.filter((l) => (l.role ? l.role === user.role : l)),
    profile: state.profileLinks.filter((l) => (l.role ? l.role === user.role : l)),
  }))

  readonly layout$ = this.select(({ logo, footerHtml, theme }) => ({
    logo,
    footerHtml,
    theme,
  }))

  readonly vm$ = this.select(this.user$, this.links$, this.layout$, (user, links, layout) => ({
    user,
    links,
    layout,
  }))

  readonly updateThemeMode = this.updater((state, theme: 'dark' | 'light' | 'auto') => ({
    ...state,
    theme,
  }))
}
