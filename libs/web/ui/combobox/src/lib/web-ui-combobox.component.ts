import { Component, Input, OnChanges, OnInit } from '@angular/core'

@Component({
  selector: 'ui-combobox',
  template: `
    <div>
      <label for="combobox" class="block text-sm font-medium text-gray-700">Assigned to</label>
      <div class="relative mt-1 w-56 ">
        <input
          id="combobox"
          type="text"
          class=" rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          (click)="onshow()"
          type="button"
          class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <ul
          *ngIf="listshow === true"
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <li
            *ngFor="let item of cboxDetail"
            class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
            tabindex="-1"
            (click)="getValue(item)"
            [ngValue]="item"
          >
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-6 w-6 flex-shrink-0 rounded-full"
              />

              <span class="ml-3 truncate">{{ item.name }}</span>
            </div>
            <span *ngIf="item.tick == true" class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class WebUiComboboxComponent implements OnInit {
  @Input() cboxDetail: Contact
  listshow?: boolean
  selected?: any
  hero?: string

  ngOnInit() {
    console.log(this.cboxDetail)
    this.listshow = false
  }

  public onOptionsSelected(event) {
    const value = event.target.value
    this.selected = value
    console.log(value)
  }
  public onshow() {
    if (this.listshow == true) {
      this.listshow = false
    } else {
      this.listshow = true
    }
  }
  getValue = (item: string) => {
    this.listshow = false
    for (let i = 0; i < Object.keys(this.cboxDetail).length; i++) {
      if (item == this.cboxDetail[i]) {
        this.cboxDetail[i].tick = true
      } else {
        this.cboxDetail[i].tick = false
      }
    }
  }

  onSelect(hero): void {
    this.cboxDetail.name = hero
  }
}
interface Contact {
  id: string
  name: string
  image?: string
  tick?: boolean
}
