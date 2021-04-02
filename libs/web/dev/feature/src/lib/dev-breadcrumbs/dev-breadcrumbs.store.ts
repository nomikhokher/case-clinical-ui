import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface Crumbs {
  name: string
  isactive: boolean
  tabHandler?: (Crumbs) => void
  content?: any
}

interface DevCrumbsState {
  crumbs?: Crumbs[]
}

@Injectable()
export class DevBreadcrumbsStore extends ComponentStore<DevCrumbsState> {
  home: string = `Home`
  products: string = `Products`
  variants: string = `Variants`
  color: string = `Color`
  edit: string = `Edit`

  constructor() {
    super({
      crumbs: [],
    })

    this.patchState({
      crumbs: [
        { name: 'Home', isactive: true, tabHandler: this.onTabHandler, content: this.home },
        { name: 'Products', isactive: false, tabHandler: this.onTabHandler, content: this.products },
        { name: 'Variants', isactive: false, tabHandler: this.onTabHandler, content: this.variants },
        { name: 'Color', isactive: false, tabHandler: this.onTabHandler, content: this.color },
        { name: 'Edit', isactive: false, tabHandler: this.onTabHandler, content: this.edit },
      ],
    })
  }

  readonly crumbs$ = this.select(this.state$, (s) => s.crumbs)
  readonly vm$ = this.select(this.crumbs$, (crumbs) => ({ crumbs }))

  onTabHandler = (crumb: Crumbs) => {
    this.crumbs$.subscribe((res) => {
      res.forEach((res) => {
        if (res.isactive == true) {
          res.isactive = false
        }
      })
    })
    crumb.isactive = true
  }
}
