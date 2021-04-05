import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-alert',
  template: `
    <div *ngIf="show" class="{{ __class() }} rounded-md {{ __bg_color() }} p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: solid/exclamation -->
          <svg
            *ngIf="icon_show"
            class="h-5 w-5 {{ _svg_text_color() }}"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium {{ _subject_text_color() }}">{{ __subject() }}</h3>
          <div class="mt-2 text-sm {{ _message_text_color() }}">
            <p>
              {{ __message() }}
            </p>
            <ul *ngIf="list.length > 0" class="list-disc pl-5 space-y-1">
              <li *ngFor="let value of list; index as i">
                {{ value }}
              </li>
            </ul>
            <div *ngIf="actionLink" class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button
                  *ngFor="let action of actionLink; index as i"
                  (click)="action.click_event !== undefined ? action.click_event() : false"
                  type="button"
                  class="bg-{{ _filter_color() }}-50 px-2 py-1.5 rounded-md text-sm font-medium text-{{
                    _filter_color()
                  }}-800 hover:bg-{{
                    _filter_color()
                  }}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-{{
                    _filter_color()
                  }}-50 focus:ring-{{ _filter_color() }}-600"
                >
                  {{ action.title }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="ml-auto pl-3" *ngIf="dismiss">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              (click)="destroy()"
              class="inline-flex bg-{{ _filter_color() }}-50 rounded-md p-1.5 text-{{ _filter_color() }}-500 hover:bg-{{
                _filter_color()
              }}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-{{
                _filter_color()
              }}-50 focus:ring-{{ _filter_color() }}-600"
            >
              <span class="sr-only">Dismiss</span>
              <!-- Heroicon name: solid/x -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiAlertComponent {
  @Input() show?: boolean
  @Input() class?: string
  @Input() subject?: string
  @Input() message?: string
  @Input() list?: string[]
  @Input() actionLink?: Object[]
  @Input() type?: string
  @Input() bg_color?: string
  @Input() dismiss?: boolean
  @Input() icon_show?: boolean

  constructor() {}

  ngOnInit() {
    this.show = this.show === undefined ? true : false
    this.dismiss = this.dismiss === undefined ? false : true
    this.icon_show = this.icon_show === undefined ? false : true
  }
  __class() {
    return this.class
  }
  __action_link() {
    if (this.actionLink !== undefined && this.actionLink !== null) {
      return this.actionLink
    }
    return []
  }

  __bg_color() {
    if (!this.bg_color.includes('bg')) {
      switch (this.bg_color) {
        case 'warning':
          return 'bg-yellow-50'
        case 'success':
          return 'bg-green-50'
        case 'danger':
          return 'bg-red-50'
        case 'info':
          return 'bg-blue-50'
      }
    }
    return this.bg_color
  }

  __subject() {
    return this.subject
  }

  __message() {
    this._filter_color()
    return this.message
  }

  _subject_text_color() {
    return 'text-' + this._filter_color() + '-800'
  }

  _message_text_color() {
    return 'text-' + this._filter_color() + '-700'
  }

  _svg_text_color() {
    return 'text-' + this._filter_color() + '-400'
  }

  _filter_color() {
    const bg_color = this.__bg_color()
    if (bg_color !== undefined && bg_color !== '') {
      if (bg_color.includes('bg-')) {
        return bg_color.substring(bg_color.indexOf('-') + 1, bg_color.indexOf('-', bg_color.indexOf('-') + 1))
      }
    }
    return false
  }

  destroy() {
    this.show = false
  }
}
