import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-side-nav-bar',
  template: `
    <div class="h-full p-3 space-y-2 w-60 text-gray-800 ">
      <div class="bg-{{ this.background }} border-solid border-2 border-gray-300 ">
        <div class="flex items-center p-2 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="w-12 h-12 rounded-full" />
          <div>
            <h2 class="text-lg font-semibold">{{ this.heading }}</h2>
            <span class="flex items-center space-x-1">
              <a href="#" class="text-xs hover:underline text-gray-600">View profile</a>
            </span>
          </div>
        </div>
        <div class="divide-y divide-gray-300">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="text-gray-900  " *ngFor="let item of menuItems">
              <hr />
              <button class="flex items-center p-2 space-x-3 rounded-md w-full focus:ring-gray-500">
                <ui-icon size="lg" class="h-6 w-6" icon="{{ item.icon }}"></ui-icon>
                <span>{{ item.title }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSideNavBarComponent {
  public isMenu = false
  public smMenuItem = false
  public onClick() {
    this.isMenu = !this.isMenu
  }

  @Input() menuItems?: Menu[]
  @Input() heading?: string
  @Input() background?: string

  ngOnInit(): void {
    console.log(this.menuItems)
  }
}
interface Menu {
  id?: number
  icon?: string
  title?: string
}
