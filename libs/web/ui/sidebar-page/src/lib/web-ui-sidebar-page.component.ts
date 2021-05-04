import { Component, Input } from '@angular/core'

export interface WebUiSidebarPageLink {
  label: string
  children: [
    {
      label: string
      icon: string
      path: string
      show?: boolean
    },
  ]
}
export interface WebUiSidebarPageHeader {
  label: string
}

@Component({
  selector: 'ui-sidebar-page',
  template: ` <router-outlet></router-outlet> `,
})
export class WebUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: WebUiSidebarPageLink[] = []
  public menuList: boolean = false
  menuOpen(link): void {
    link.show = link.show ? false : true
  }
  ngOnInit() {
    this.links = this.links.map((value) => {
      if (value.children) {
        for (let i = 0; i < value.children.length; i++) {
          value.children[i].show = true
        }
      }
      return value
    })
  }
}
