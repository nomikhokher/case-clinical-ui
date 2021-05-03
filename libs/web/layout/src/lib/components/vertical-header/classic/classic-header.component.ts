import { Component, Input } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'classic-header-layout',
  template: ` <div>classic</div> `,
})
export class ClassicHeaderComponent {
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
