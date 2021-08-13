import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core'

@Component({
  selector: 'ui-multi-select',
  styles: [
    `
      [x-cloak] {
        display: none;
      }
      .svg-icon {
        width: 1em;
        height: 1em;
      }
      .svg-icon path,
      .svg-icon polygon,
      .svg-icon rect {
        fill: #333;
      }
      .svg-icon circle {
        stroke: #4691f6;
        stroke-width: 1;
      }
    `,
  ],
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <p class="text-2xl text-gray-800 py-3 font-bold dark:text-gray-100">Multi Select</p>
      <div class="w-full md:w-1/2 flex flex-col h-auto">
        <input name="values" type="hidden" [value]="selectedValues()" />
        <div class="inline-block relative w-64">
          <div class="flex flex-col  relative">
            <div (click)="(open)" class="w-full">
              <div class="my-2 p-1 flex border border-gray-200 bg-white rounded">
                <div class="flex flex-auto flex-wrap">
                  <ng-container *ngFor="let option of selected; let i = index">
                    <div class="flex justify-center m-1 font-medium py-1 px-1 rounded bg-gray-100 border">
                      <div class="text-xs font-normal leading-none max-w-full flex-initial hidde">
                        {{ options[option]?.value }}
                      </div>
                      <div class="flex flex-auto flex-row-reverse">
                        <div (click)="remove(i, option)">
                          <svg class="fill-current h-4 w-4 " role="button" viewBox="0 0 20 20">
                            <path
                              d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
                                         c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183
                                         l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
                                         C14.817,13.62,14.817,14.38,14.348,14.849z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </ng-container>
                  <div *ngIf="selected.length == 0" class="flex-1" (click)="show = !show">
                    <input
                      placeholder="Select a option"
                      class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                      [value]="selectedValues()"
                    />
                  </div>
                </div>
                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                  <button
                    type="button"
                    *ngIf="!show"
                    (click)="open()"
                    class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                  >
                    <ui-icon size="lg" class="h-6 w-6" icon="chevronDown"></ui-icon>
                  </button>
                  <button
                    type="button"
                    *ngIf="show"
                    (click)="close()"
                    class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none transform rotate-180"
                  >
                    <ui-icon size="lg" class="h-6 w-6 " icon="chevronDown"></ui-icon>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full px-4">
              <div *ngIf="show" class="absolute shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select">
                <div class="flex flex-col w-full overflow-y-auto h-64">
                  <ng-container *ngFor="let option of data; let i = index" class="overflow-auto">
                    <div
                      class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-gray-100"
                      (click)="select(i, $event)"
                    >
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
                        <div class="w-full items-center flex justify-between">
                          <div class="mx-2 leading-6">{{ option.value }}</div>

                          <ui-icon
                            *ngIf="option.selected"
                            size="sm"
                            class="h-4 w-4 text-gray-500"
                            icon="check"
                          ></ui-icon>
                        </div>
                      </div>
                    </div>
                  </ng-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMultiSelectComponent {
  @Input() data: Array<any>

  ngAfterViewInit(): void {
    this.loadOptions()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes.data.currentValue
  }

  options = []
  selected = []
  show = false
  open() {
    this.show = true
  }
  close() {
    this.show = false
  }
  isOpen() {
    return this.show === true
  }
  select(index, event) {
    if (!this.options[index]?.selected) {
      this.options[index].selected = true
      this.options[index].element = event.target
      this.selected.push(index)
    } else {
      this.selected.splice(this.selected.lastIndexOf(index), 1)
      this.options[index].selected = false
    }
    this.data = this.options
  }
  remove(index, option) {
    this.options[option].selected = false
    this.selected.splice(index, 1)
  }
  loadOptions() {
    const options = this.data
    for (let i = 0; i < options.length; i++) {
      this.options.push({
        value: options[i].value,
        text: options[i].value,
        selected: options[i].selected,
      })
    }
  }
  selectedValues() {
    return this.selected.map((option) => {
      return this.options[option].value
    })
  }
}
