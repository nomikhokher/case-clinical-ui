import { Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ServiceCodepreview } from '../../../codepreview.service'

enum DisplayMode {
  Preview,
  Code,
}

export interface ComponentProp {
  label?: string
  description?: string
  dataType?: string
  prop?: string
  type?: []
  typeObj?
}

@Component({
  selector: 'ui-preview',
  template: `
    <ng-template #headerControls>
      <ng-container *ngIf="githubURL">
        <ui-button
          [label]="'View on Github'"
          [variant]="'white'"
          [icon]="'github'"
          (click)="handleGithubClick()"
        ></ui-button>
      </ng-container>
    </ng-template>

    <ui-page
      containerClass="bg-gray-50 dark:bg-gray-900"
      [breadcrumbs]="breadcrumbs"
      [headerTitle]="title"
      [headerMeta]="directoryMeta"
      [controlsTemplate]="headerControls"
    >
      <div>
        <div class="flex items-center justify-between py-2">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">UI Element</h3>
          <div class="flex items-center">
            <div>
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                >
                  <option selected>Preview</option>
                  <option>Code</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <nav class="flex space-x-2  " aria-label="Tabs">
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Preview)"
                    class=" flex items-center px-3 py-2 font-medium text-sm rounded-md"
                    [class.theme-bg-50]="DISPLAY_MODE.Preview === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Preview === activeTab"
                    [class.dark:text-gray-400]="DISPLAY_MODE.Preview !== activeTab"
                    [class.dark:hover:text-gray-300]="DISPLAY_MODE.Preview !== activeTab"
                    [class.dark:theme-bg-800]="DISPLAY_MODE.Preview === activeTab"
                    [class.dark:theme-color-100]="DISPLAY_MODE.Preview === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Preview !== activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Preview !== activeTab"
                    aria-current="page"
                  >
                    <ui-icon icon="eye" class="h-5 w-5 mr-1"></ui-icon>
                    Preview
                  </button>
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Code)"
                    class="flex items-center px-3 py-2 font-medium text-sm rounded-md"
                    [class.theme-bg-50]="DISPLAY_MODE.Code === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Code === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:text-gray-400]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:hover:text-gray-300]="DISPLAY_MODE.Code !== activeTab"
                    [class.dark:theme-bg-800]="DISPLAY_MODE.Code === activeTab"
                    [class.dark:theme-color-100]="DISPLAY_MODE.Code === activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Code !== activeTab"
                    aria-current="page"
                  >
                    <ui-icon icon="code" class="h-5 w-5  "></ui-icon>
                    Code
                  </button>
                  <ui-icon
                    [ngClass]="darkMode ? 'opacity-40' : 'text-yellow-500'"
                    size="lg"
                    class="h-5 w-5 py-2"
                    icon="sun"
                  ></ui-icon>
                  <span class=" py-2">
                    <button
                      [ngClass]="darkMode ? ' bg-gray-200' : 'bg-gray-300'"
                      type="button"
                      class=" relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-gray-100 focus:outline-none"
                      role="switch"
                      aria-checked="false"
                      (click)="onDarkMode()"
                    >
                      <span
                        [ngClass]="darkMode ? 'translate-x-5 bg-indigo-500' : 'translate-x-0 bg-white'"
                        aria-hidden="true"
                        class=" pointer-events-none inline-block h-5 w-5 rounded-full  shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </span>

                  <ui-icon
                    [ngClass]="darkMode ? 'theme-color-600' : 'opacity-40'"
                    size="lg"
                    class="h-5 w-5 py-2"
                    icon="moon"
                  ></ui-icon>
                </nav>
              </div>
            </div>
            <div class="border-l border-gray-200 ml-4 pl-4">
              <button class="text-gray-400 h-6 w-6 flex items-center justify-center hover:theme-color-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div [ngClass]="darkMode ? 'dark' : ''" class="">
          <div class="p-8 dark:bg-gray-600 bg-gray-200 bg-opacity-70 sm:rounded-lg">
            <ng-container *ngIf="activeTab === DISPLAY_MODE.Preview">
              <ng-content></ng-content>
            </ng-container>
            <ng-container *ngIf="activeTab === DISPLAY_MODE.Code">
              <ui-code [copyButton]="false" [code]="code" [language]="'json'"></ui-code>
            </ng-container>
          </div>
        </div>
      </div>

      <div *ngIf="component_inputs?.length > 0" class="flex flex-col my-10">
        <div class="-my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Inputs</h3>
          </div>
          <div class="py-2 align-middle grid grid-cols-4 gap-3">
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg col-span-2">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Data Type
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Attribute
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr *ngFor="let input of component_inputs">
                    <td class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      {{ input.label }}
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ input.description }}
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-sm text-pink-500">
                      <code>
                        {{ input.dataType }}
                      </code>
                    </td>
                    <td class="px-3 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                      <code>
                        {{ input.prop }}
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg col-span-2">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-3 py-3 relative text-center text-xs font-medium text-indigo-700 dark:text-gray-400 uppercase tracking-wider"
                    >
                      <svg
                        *ngIf="secondBody"
                        (click)="tableToggler('toggle')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 cursor-pointer mx-3 my-2 hover:text-gray-500 absolute left-0 top-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Play Ground
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
                  *ngIf="firstBody"
                >
                  <tr *ngFor="let item of codeObj | keyvalue; let i = index">
                    <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200 ">
                      <div class="flex rounded-md shadow-sm">
                        <div class="w-full relative" *ngIf="input_enabled(item)">
                          <input
                            [id]="account_number + '_' + i"
                            [value]="stringify(item.value)"
                            type="text"
                            name="account_number"
                            id="account_number"
                            class="focus:ring-indigo-500 focus:border-indigo-500 w-full block sm:text-sm border-gray-300 rounded-md"
                            placeholder="Default Value"
                            [ngModel]="stringify(item.value)"
                            (ngModelChange)="modelChangeFn(item.key, $event)"
                          />
                          <span class="absolute right-0 top-2 cursor-pointer text-gray-400 hover:text-gray-800">
                            <svg
                              (click)="tableToggler(select_options(item))"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>

                        <div class=" w-full" *ngIf="!input_enabled(item)">
                          <select
                            (change)="selectChange(item.key, $event.target.value)"
                            class="rounded-lg border-gray-400 w-full"
                          >
                            <option
                              class="rounded"
                              *ngFor="let i of select_options(item)"
                              [selected]="i === item.value"
                            >
                              {{ i }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody *ngIf="secondBody">
                  <div>
                    <div class="my-2 text-center" *ngFor="let item of tableData; let i = index">
                      <select
                        class="rounded-lg border-gray-400 w-11/12"
                        (change)="selectObjChange(item, $event.target.value)"
                      >
                        <option *ngFor="let val of object_first_value(item)">{{ val }}</option>
                      </select>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div *ngIf="component_outputs?.length > 0" class="flex flex-col my-10">
        <div class="-my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Outputs</h3>
          </div>
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-white dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Data Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Attribute
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr *ngFor="let outputs of component_outputs">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                      {{ outputs.label }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ outputs.description }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-pink-500">
                      <code>
                        {{ outputs.dataType }}
                      </code>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                      <code>
                        {{ outputs.prop }}
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ui-page>
  `,
})
export class WebUiPreviewComponent implements OnInit {
  constructor(private readonly codePreview: ServiceCodepreview) {}
  DISPLAY_MODE: typeof DisplayMode = DisplayMode

  @Input() title?: string
  @Input() code?: string
  @Input() lang?: string
  @Input() component_preview?: string
  @Input() component_inputs?: ComponentProp[]
  @Input() component_outputs?: ComponentProp[]
  @Input() directory?: string
  @Input() breadcrumbs: Crumb[]
  @Input() githubURL?: string

  @Input() codeObj
  public keys: Array<any>
  public values: Array<any>

  public myVal = ''
  public objectKeys: string
  public darkMode: boolean = false
  activeTab: DisplayMode = DisplayMode.Preview
  code_toggle = false
  firstBody = true
  secondBody = false

  get directoryMeta() {
    return [{ icon: 'folder', label: this.directory }]
  }

  ngOnInit() {
    this.lang = this.lang !== undefined ? this.lang : 'html'
  }

  input_enabled(item) {
    let inputs = this.component_inputs.find((r) => r.prop.slice(1, -1) === item.key)
    return inputs.type == undefined ? true : false
  }
  select_options(item) {
    let inputs = this.component_inputs.find((r) => r.prop.slice(1, -1) === item.key)
    this.objectKeys = inputs.prop.slice(1, -1)
    return inputs.type == undefined ? inputs.typeObj : inputs.type
  }

  code_toggler(value) {
    this.code_toggle = value
  }

  handleTabClick(mode: DisplayMode) {
    this.activeTab = mode
  }

  handleGithubClick() {
    if (!this.githubURL) return
    window.open(this.githubURL, '_blank')
  }
  debounce = {
    interval: null,
    wait: 500,
    func: () => {},
    __: function (f, w) {
      if (this.interval) {
        clearTimeout(this.interval)
      }
      this.wait = w
      this.func = f
      this.interval = setTimeout(this.func, this.wait)
    },
  }
  typeOf(value: any) {
    return (typeof value).toUpperCase()
  }
  stringify(value: any) {
    if (typeof value === 'object') {
      return JSON.stringify(value)
    }
    return value
  }

  object_first_value(object) {
    if (object) {
      return object[Object.keys(object)[0]]
    }
    return null
  }
  public modelChangeFn(myKey, newValue) {
    this.debounce.__(() => {
      this.myVal = newValue
      if (newValue == 'true' || newValue == 'false') {
        newValue == 'true' ? (this.codeObj[myKey] = true) : (this.codeObj[myKey] = false)
      } else if (typeof this.codeObj[myKey] === 'number') {
        this.codeObj[myKey] = Number(this.myVal)
      } else if (typeof this.codeObj[myKey] === 'object') {
        this.codeObj[myKey] = JSON.parse(newValue)
      } else {
        this.codeObj[myKey] = this.myVal
      }
      this.codePreview.codePreview$.next(this.codeObj)
    }, 1000)
    // newValue.preventDefault();
  }
  public selectChange(myKey, newValue): void {
    if (newValue == 'true' || newValue == 'false') {
      newValue == 'true' ? (this.codeObj[myKey] = true) : (this.codeObj[myKey] = false)
    }
    this.codeObj[myKey] = newValue
  }
  isTableToggle = false
  tableData
  tableToggler(item) {
    if (typeof item[0] === 'object' || item == 'toggle') {
      this.firstBody = !this.firstBody
      this.secondBody = !this.secondBody
      this.isTableToggle = true
      this.tableData = item
    }
  }
  selectObjChange(myKey, newValue): void {
    let key = Object.keys(myKey)
    let keyObj = key[0]
    let val = this.codeObj[this.objectKeys]
    val[keyObj] = newValue
    this.codeObj[this.objectKeys] = val
  }
  onDarkMode() {
    this.darkMode = !this.darkMode
  }
}
