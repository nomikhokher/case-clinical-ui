import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'compact-header-layout',
  template: ` <div>compact</div> `,
})
export class CompactHeaderComponent {
  public showMenu = false
  @Input() notificationsLink?: string
  @Input() user?: User
  @Input() links: { label: string; route: string }[] = []
  @Input() profileLinks: { label: string; route: string }[] = []
  @Input() logo: string

  openMenu() {
    this.showMenu = !this.showMenu
  }
}
