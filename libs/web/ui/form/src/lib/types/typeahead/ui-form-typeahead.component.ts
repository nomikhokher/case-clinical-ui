import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FieldType, FormlyFormOptions } from '@ngx-formly/core'
import { Subject, Observable } from 'rxjs'

interface Item {
  id: string
  name: string
}

@Component({
  template: `
    <div>
      <label for="combobox" class="block text-sm font-medium text-gray-700 dark:text-white">{{ this.label }}</label>

      <div class="relative mt-1 w-56 ">
        <input
          id="combobox"
          type="text"
          value="{{ this.textselect }}"
          class="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
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
            *ngFor="let item of to?.options"
            class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
            (click)="getValue(item)"
            id="this.itemid"
          >
            <div class="flex items-center">
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
      <br /><br /><br /><br />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormTypeaheadComponent extends FieldType implements OnInit {
  formControl!: FormControl
  search$ = new Subject<string>()
  static = false
  selectedItem: Item
  //items: Observable<Item[]>
  //options$: Observable<string[]>
  @Input() options$: Contact
  public value: any
  @Input() label
  cboxDetail: any
  listshow?: boolean
  obs?: boolean = true
  selected?: any
  hero?: string
  textselect?: string

  onChange(selection) {
    if (this.to.onChange) {
      return this.to.onChange(selection)
    }
    return selection
  }

  onSearch({ term }) {}

  inputMapFn(e: any) {
    if (this.to.mapFn) {
      return this.to.mapFn(e)
    }
    return e
  }

  outputMapFn(e: any) {
    if (this.to.convertOutput === true && e && this.to.mapFn) {
      this.formControl.setValue(this.to.mapFn(e))
      this.value = e
      return
    }
    this.formControl.setValue(e)
    this.value = e
  }
  ngOnInit() {
    this.listshow = false
  }

  public onOptionsSelected(event) {
    const value = event.target.value
    this.selected = value
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
    for (let i = 0; i < Object.keys(this.to?.options).length; i++) {
      if (item == this.to?.options[i]) {
        this.hero = this.to?.options[i].name
        this.textselect = this.to?.options[i].name
        this.to.options[i].tick = true
      } else {
        this.to.options[i].tick = false
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
