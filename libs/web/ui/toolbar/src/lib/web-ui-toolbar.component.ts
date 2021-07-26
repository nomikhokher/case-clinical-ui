import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-toolbar',
  template: `
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-{{ background }}-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none flex-center">
            <li class="nav-item" *ngFor="let button of buttons">
              <button
                type="button"
                class="mx-4 px-3 py-2 flex items-center text-xs uppercase focus:bg-{{ background }}-400 active:bg-{{
                  background
                }}-400 focus:outline-none hover:bg-{{
                  background
                }}-400 font-bold leading-snug text-white hover:opacity-75"
                [title]="button.title"
              >
                <ui-icon [icon]="button.icon" [class]="'h-6 w-6 text-white'"></ui-icon>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class WebUiToolbarComponent {
  @Input() buttons: Button
  @Input() background?: string
}

interface Button {
  icon: string
  title?: string
}
