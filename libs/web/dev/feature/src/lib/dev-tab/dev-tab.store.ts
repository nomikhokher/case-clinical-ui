import { Injectable, ɵisListLikeIterable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { WebUiToastService } from '@schema-driven/web/ui/toast'

export interface Tabs {
  name: string
  active?: boolean
  content?: any
  icon?: string
  notification?: number
}

interface DevTabsState {
  tabOptions?: Tabs[]
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
      tabOptions: [],
    })

    this.patchState({
      tabOptions: [
        { name: 'Home', content: this.home, notification: 52 },
        { name: 'About', content: this.about, notification: 2 },
        { name: 'Services', content: this.services, notification: 6 },
        { name: 'Carrer', content: this.carrer },
        { name: 'Contact us', content: this.contact },
      ],
    })
  }

  readonly tabOptions$ = this.select(this.state$, (s) => s.tabOptions)
  readonly vm$ = this.select(this.tabOptions$, (tabOptions) => ({ tabOptions }))
}
