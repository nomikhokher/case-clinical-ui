import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { WebUiToastService } from '@schema-driven/web/ui/toast'

export interface Tabs {
  name: string
  isactive: boolean
  tabHandler?: (Tabs) => void
  content?: any
}

interface DevTabsState {
  demos?: Tabs[]
}

@Injectable()
export class DevTabsStore extends ComponentStore<DevTabsState> {
  home: string = ` <p> Home </p>`
  about: string = ` <p>About</p>`
  services: string = ` <p>Services</p>`
  carrer: string = ` <p>Carrer</p>`
  contact: string = ` <p>Contact us</p>`

  constructor(private readonly toast: WebUiToastService) {
    super({
      demos: [],
    })

    this.patchState({
      demos: [
        { name: 'Home', isactive: true, tabHandler: this.onTabHandler, content: this.home },
        { name: 'About', isactive: false, tabHandler: this.onTabHandler, content: this.about },
        { name: 'Services', isactive: false, tabHandler: this.onTabHandler, content: this.services },
        { name: 'Carrer', isactive: false, tabHandler: this.onTabHandler, content: this.carrer },
        { name: 'Contact us', isactive: false, tabHandler: this.onTabHandler, content: this.contact },
      ],
    })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))

  onTabHandler = (tab: Tabs) => {
    this.demos$.subscribe((res) => {
      res.forEach((res) => {
        if (res.isactive == true) {
          res.isactive = false
        }
      })
    })
    tab.isactive = true
  }
}
