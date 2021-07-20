import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-avatar',
  template: `
    <ng-container [ngSwitch]="mode">
      <span
        (clickOutside)="avt = false"
        (click)="onAvatar()"
        *ngSwitchCase="'img'"
        class="{{ __badge_enable() ? 'inline-block relative' : '' }} cursor-pointer relative hover:opacity-80"
      >
        <img
          *ngIf="!__badge_enable()"
          class="inline-block {{ __size() }} {{ __radius() }}"
          src="{{ payload }}"
          alt=""
        />
        <img *ngIf="__badge_enable()" class="inline-block {{ __size() }} {{ __radius() }}" src="{{ payload }}" alt="" />
        <span
          *ngIf="__badge_enable()"
          class="absolute block {{ __badge_size() }} rounded-full ring-2 ring-white {{
            __badge_position() + __badge_color()
          }}"
        ></span>
        <div
          *ngIf="avt"
          class="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
        >
          <!-- Active: "bg-gray-100", Not Active: "" -->
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Demo 1</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            >Demo 2</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            >Demo 3</a
          >
        </div>
      </span>
      <span
        (clickOutside)="avt = false"
        (click)="onAvatar()"
        *ngSwitchCase="'icon'"
        class="cursor-pointer inline-block {{ __size() }} {{ __radius() }} overflow-hidden bg-gray-100 {{
          __badge_enable() ? 'inline-block relative' : ''
        }}"
      >
        <ui-icon
          *ngIf="!__badge_enable()"
          [icon]="payload"
          size="lg"
          class="text-lg inline-block h-full w-full text-gray-300"
        ></ui-icon>
        <ui-icon
          *ngIf="__badge_enable()"
          [icon]="payload"
          size="lg"
          class="text-lg h-full w-full text-gray-300"
        ></ui-icon>
        <span
          *ngIf="__badge_enable()"
          class="absolute block {{ __badge_size() }} rounded-full ring-2 ring-white {{
            __badge_position() + __badge_color()
          }}"
        ></span>
      </span>
      <span
        (clickOutside)="avt1 = false"
        (click)="onAvatar()"
        *ngSwitchCase="'text'"
        class="relative  hover:opacity-80 cursor-pointer inline-flex {{
          __badge_enable() ? 'inline-block relative' : ''
        }} items-center justify-center {{ __size() }} {{ __radius() }} bg-gray-500"
      >
        <span *ngIf="!__badge_enable()" class="inline-block text-xs font-medium leading-none text-white">{{
          payload
        }}</span>
        <span *ngIf="__badge_enable()" class="text-xs font-medium leading-none text-white">{{ payload }}</span>
        <span
          *ngIf="__badge_enable()"
          class="absolute block {{ __badge_size() }} rounded-full ring-2 ring-white {{
            __badge_position() + __badge_color()
          }}"
        ></span>
        <div
          *ngIf="avt1"
          class="origin-top-right absolute top-14 left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
        >
          <!-- Active: "bg-gray-100", Not Active: "" -->
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Demo 1</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            >Demo 2</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 cursor-pointer hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            >Demo 3</a
          >
        </div>
      </span>
    </ng-container>
  `,
})
export class WebUiAvatarComponent {
  @Input() show?: boolean
  @Input() mode: 'img' | 'icon' | 'text'
  @Input() payload?: string
  @Input() radius?: string
  @Input() size?: number
  @Input() badge?: any
  @Input() width?: string
  @Input() height?: string
  ngOnInit() {}
  public avt = false
  public avt1 = false
  onAvatar() {
    this.avt = !this.avt
    this.avt1 = !this.avt1
    // alert('Avatar Clicked!')
  }

  __radius() {
    return this.radius !== undefined ? (this.radius === 'circle' ? 'rounded-full' : 'rounded-md') : 'rounded-full'
  }

  __size() {
    if (this.width !== undefined || this.height !== undefined) {
      return (this.width ? 'w-' + this.width : '') + ' ' + (this.height ? 'h-' + this.height : '')
    }
    return this.size !== undefined ? 'h-' + this.size.toString() + ' ' + 'w-' + this.size.toString() : 'h-10 w-10'
  }

  __badge_size() {
    if (this.badge !== undefined) {
      let size = (parseInt(this.size.toString()) / 4).toFixed(1)
      return 'h-' + size + ' w-' + size
    }
    return ''
  }

  __badge_position() {
    if (this.badge !== undefined) {
      if (this.badge.position !== undefined) {
        let positions = this.badge.position.toString().split('-')
        return ' ' + positions[0] + '-0' + ' ' + positions[1] + '-0 '
      }
    }
    return ' top-0 right-0 '
  }

  __badge_color() {
    if (this.badge !== undefined) {
      if (this.badge.color !== undefined) {
        let color = this.badge.color.toString()
        return 'bg-' + color + '-300'
      }
    }
    return ' bg-gray-300 '
  }

  __badge_enable() {
    if (this.badge !== undefined) {
      return true
    }
    return false
  }
}
