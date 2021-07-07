import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

export interface Crumbs {
  name: string
  isactive: boolean
  tabHandler?: (Crumbs) => void
  content?: any
  icon?: string
}

interface DevCrumbsState {
  crumbs?: Crumbs[]
  alignment?: string
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
      alignment: 'center', //alignment can be [right, center, left, full]
    })

    this.patchState({
      crumbs: [
        { name: 'Home', isactive: true, tabHandler: this.onTabHandler, content: this.home, icon: 'home' },
        {
          name: 'Products',
          isactive: false,
          tabHandler: this.onTabHandler,
          content: this.products,
          icon: 'development',
        },
        { name: 'Variants', isactive: false, tabHandler: this.onTabHandler, content: this.variants, icon: 'folder' },
        { name: 'Color', isactive: false, tabHandler: this.onTabHandler, content: this.color, icon: 'about' },
        { name: 'Edit', isactive: false, tabHandler: this.onTabHandler, content: this.edit, icon: 'key' },
      ],
    })
  }

  readonly crumbs$ = this.select(this.state$, (s) => s.crumbs)
  readonly alignment$ = this.select(this.state$, (s) => s.alignment)
  readonly vm$ = this.select(this.crumbs$, this.alignment$, (crumbs, alignment) => ({ crumbs, alignment }))

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
