import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ResizeEvent } from 'angular-resizable-element'
import { ServiceCodepreview } from '../../../codepreview.service'

enum DisplayMode {
  Preview,
  Responsive,
  Code,
}

export interface ComponentProp {
  label?: string
  description?: string
  dataType?: string
  prop?: string
  type?: []
  typeObj?
  typeArray?
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
              <div class="sm:hidden inline-block xs:inline-flex">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  class="flex w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                >
                  <option selected>Preview</option>
                  <option>Code</option>
                </select>
                <nav class="flex space-x-2  " aria-label="Tabs">
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
              <div class="hidden sm:block">
                <nav class="flex space-x-2  " aria-label="Tabs">
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Preview); codePreviewToggler = true"
                    class=" flex items-center px-3 py-2 font-medium text-sm rounded-md focus:outline-none"
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
                    (click)="handleTabClick(DISPLAY_MODE.Responsive); codePreviewToggler = true"
                    class="flex items-center px-3 py-2 font-medium text-sm rounded-md focus:outline-none"
                    [class.theme-bg-50]="DISPLAY_MODE.Responsive === activeTab"
                    [class.theme-color-700]="DISPLAY_MODE.Responsive === activeTab"
                    [class.dark:text-gray-400]="DISPLAY_MODE.Responsive !== activeTab"
                    [class.dark:hover:text-gray-300]="DISPLAY_MODE.Responsive !== activeTab"
                    [class.dark:theme-bg-800]="DISPLAY_MODE.Responsive === activeTab"
                    [class.dark:theme-color-100]="DISPLAY_MODE.Responsive === activeTab"
                    [class.text-gray-500]="DISPLAY_MODE.Responsive !== activeTab"
                    [class.hover:text-gray-700]="DISPLAY_MODE.Responsive !== activeTab"
                  >
                    <ui-icon icon="template" class="h-5 w-5 mr-1"></ui-icon>
                    Responsive
                  </button>
                  <button
                    (click)="handleTabClick(DISPLAY_MODE.Code); codePreviewToggler = false"
                    class="flex items-center px-3 py-2 font-medium text-sm rounded-md focus:outline-none"
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
          <p
            *ngIf="activeTab === DISPLAY_MODE.Preview"
            class="float-right font-mono h-3 mr-8 dark:text-white text-gray-500"
          ></p>
          <div class="relative dark:bg-gray-600 bg-gray-200 bg-opacity-70 sm:rounded-lg mb-20">
            <ng-container *ngIf="activeTab === DISPLAY_MODE.Preview">
              <div class="relative">
                <div class="p-8 bg-white dark:bg-gray-800">
                  <div class="max-w-7xl mx-auto" #child_dom id="child_dom">
                    <ng-content></ng-content>
                  </div>
                </div>
              </div>
            </ng-container>

            <ng-container *ngIf="activeTab === DISPLAY_MODE.Responsive">
              <div class="bg-gray-50 relative rounded-md">
                <p class="flex justify-end text-md font-semibold font-mono py-1">
                  [ {{ width.toFixed(0) }} ] x [ {{ height.toFixed(0) }} ]
                </p>
                <div
                  class="inherit max-w-7xl"
                  [ngStyle]="style"
                  mwlResizable
                  [enableGhostResize]="true"
                  [resizeSnapGrid]="{ left: 1, right: 1 }"
                  (resizeEnd)="onResizeEnd($event)"
                  [validateResize]="validate"
                  (resizeStart)="onResizeStart($event)"
                  (resizing)="onResize($event)"
                >
                  <div class="bg-white max-w-7xl rounded">
                    <div class="max-w-7xl mx-auto relative">
                      <div
                        [resizeEdges]="{ right: true }"
                        mwlResizeHandle
                        class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4"
                        style="touch-action: none; cursor: row-resize;"
                      >
                        <div class="absolute inset-y-0 -inset-x-2"></div>
                        <svg
                          aria-hidden="true"
                          class="h-4 w-4 text-gray-600 pointer-events-none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
                        </svg>
                      </div>
                      <iframe
                        title="Simple centered preview"
                        aria-label="Simple centered preview"
                        name="frame"
                        class="w-full pl-2 pr-6 py-8 sm:rounded-r-none"
                        id="iframe"
                        #iframe
                        *ngIf="childDiv"
                        height="{{ iframeHeight }}"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </ng-container>

            <ng-container *ngIf="activeTab === DISPLAY_MODE.Code">
              <ui-code
                class="mb-10"
                [theme]="darkMode"
                [copyButton]="false"
                [code]="code"
                [language]="'json'"
              ></ui-code>
            </ng-container>
          </div>
        </div>
      </div>

      <div *ngIf="component_inputs?.length > 0 && activeTab === DISPLAY_MODE.Preview" class="flex flex-col my-10">
        <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto">
            <thead class="bg-white dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  class="px-3 py-3 relative text-center text-xs font-medium text-indigo-700 dark:text-gray-400 uppercase tracking-wider"
                >
                  <svg
                    *ngIf="secondBody || thirdBody"
                    (click)="secondBody ? tableToggler('toggle') : tableToggler('third_toggle')"
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
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" *ngIf="firstBody">
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
                      <span
                        class="absolute right-0 top-2 cursor-pointer text-gray-400 hover:text-gray-800"
                        *ngIf="input_icon(item)"
                      >
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
                        <option class="rounded" *ngFor="let i of select_options(item)" [selected]="i === item.value">
                          {{ i }}
                        </option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody
              class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 w-full"
              *ngIf="secondBody"
            >
              <tr class="my-2 text-center w-full space-y-2" *ngFor="let item of tableData; let i = index">
                <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                  <div *ngIf="!input_second_enabled(item)">
                    <select
                      class="rounded-lg border-gray-400 w-full"
                      (change)="selectObjChange(item, $event.target.value)"
                    >
                      <option *ngFor="let val of object_first_value(item)">{{ val }}</option>
                    </select>
                  </div>
                  <div *ngIf="input_second_enabled(item)">
                    <input
                      [id]="'secondBody_' + i"
                      [value]="stringify_value(item)"
                      type="text"
                      name="account_number"
                      id="account_number"
                      class="focus:ring-indigo-500  focus:border-indigo-500 w-full block sm:text-sm border-gray-300 rounded-md"
                      placeholder="Default Value"
                      [ngModel]="stringify_value(item)"
                      (ngModelChange)="selectObjChange(item, $event)"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody
              class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 w-full"
              *ngIf="thirdBody"
            >
              <div class="w-full my-3" *ngFor="let values of thirdBodyData; let i = index">
                <label for="" class="text-theme-500 ml-3 text-">{{ objectKeys | uppercase }} {{ i + 1 }}</label>
                <tr class="my-2 text-center grid grid-cols-1" *ngFor="let item of values; let j = index">
                  <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                    <div *ngIf="!input_second_enabled(item)">
                      <select
                        class="rounded-lg border-gray-400 w-full"
                        (change)="selectArrayChange(item, $event.target.value, i)"
                      >
                        <option *ngFor="let val of object_first_value(item)">{{ val }}</option>
                      </select>
                    </div>
                    <div *ngIf="input_second_enabled(item)">
                      <input
                        [id]="'thirdBody' + i + j"
                        [value]="stringify_value(item)"
                        type="text"
                        name="account_number"
                        id="account_number"
                        class="focus:ring-indigo-500  focus:border-indigo-500 w-full block sm:text-sm border-gray-300 rounded-md"
                        placeholder="Default Value"
                        [ngModel]="stringify_value(item)"
                        (ngModelChange)="selectArrayChange(item, $event, i)"
                      />
                    </div>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
        <div class="my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mt-3 ml-3">Inputs</h3>
          </div>
          <div class="py-2 align-middle">
            <div class="shadow border-b border-gray-200 dark:border-gray-700 sm:rounded-lg overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
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
          </div>
        </div>
      </div>
      <div *ngIf="component_outputs?.length > 0" class="flex flex-col my-10">
        <div class="-my-2 overflow-x-auto">
          <div class="pb-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Outputs</h3>
          </div>
          <div class="py-2 align-middle inline-block min-w-full">
            <div class="shadow border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto">
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
  changeDom: any
  iframeHeight

  style: { position?: string; left: string; top: string; width: string; height: string }
  constructor(
    private readonly codePreview: ServiceCodepreview,
    private changeDetector: ChangeDetectorRef,
    private readonly renderer: Renderer2,
    private element: ElementRef,
  ) {}
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

  @ViewChild('child_dom', { read: ElementRef }) child_dom: ElementRef
  @ViewChild('iframe', { read: ElementRef }) iframe: ElementRef
  @ViewChild('dragger') dragger: ElementRef
  @ViewChild('container') container: ElementRef

  public myVal = ''
  public childDiv: ElementRef | any = '<div>Loding...</div>'
  public objectKeys: string
  public darkMode: boolean = false
  activeTab: DisplayMode = DisplayMode.Preview
  code_toggle = false
  firstBody = true
  secondBody = false
  thirdBody = false
  codePreviewToggler = true

  public isResizing = false
  public lastDownX = 0
  public draggerDownX = null
  public containerWidth = null
  width = 1152
  height = 214

  get directoryMeta() {
    return [{ icon: 'folder', label: this.directory }]
  }
  ngOnInit() {
    this.lang = this.lang !== undefined ? this.lang : 'html'
  }

  ngAfterViewInit() {
    this.changeDom = this.child_dom.nativeElement?.children[0].innerHTML
  }

  onResize(event: ResizeEvent): void {
    this.width = event.rectangle.width
    this.height = event.rectangle.height
  }

  onResizeStart(event: ResizeEvent): void {
    this.width = event.rectangle.width
    this.height = event.rectangle.height
  }

  MIN_DIMENSIONS_PX: number = 200
  MAX_DIMENSIONS_PX: number = 1152
  validate(event: ResizeEvent): boolean {
    if (event.rectangle.width && (event.rectangle.width > 1152 || event.rectangle.width < 400)) {
      return false
    }
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < this.MIN_DIMENSIONS_PX || event.rectangle.height < this.MIN_DIMENSIONS_PX)
    ) {
      return false
    }
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width > this.MAX_DIMENSIONS_PX || event.rectangle.height > this.MAX_DIMENSIONS_PX)
    ) {
      return false
    }
    return true
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    }
  }

  input_enabled(item) {
    let inputs = this.component_inputs.find((r) => r.prop.slice(1, -1) === item.key)
    return inputs.type == undefined ? true : false
  }
  input_second_enabled(item) {
    let key = Object.keys(item)
    let keyObj = key[0]
    if (typeof item[keyObj] === 'string') {
      return true
    }
    return false
  }
  select_options(item) {
    let inputs = this.component_inputs.find((r) => r.prop.slice(1, -1) === item.key)
    this.objectKeys = inputs.prop.slice(1, -1)

    if (inputs.type == undefined) {
      if (inputs.typeObj == undefined) {
        if (inputs.typeArray == undefined) {
          return
        }
        return inputs.typeArray
      }
      return inputs.typeObj
    }
    return inputs.type
    // return inputs.type == undefined ? inputs.typeObj : inputs.type
  }

  code_toggler(value) {
    this.code_toggle = value
  }

  handleTabClick(mode: DisplayMode) {
    this.activeTab = mode
    if (mode === 1) {
      this.getFrameHeight()
      this.changeDetector.detectChanges()
      this.childDiv = `<html><head><meta charset='utf-8' /><base href='/' /><meta name='viewport' content='width=device-width, initial-scale=1' /><link href='https://unpkg.com/tailwindcss@2.2.7/dist/tailwind.min.css' rel='stylesheet'></head><body>
            ${this.changeDom}
          </body></html>`
      this.renderer.setAttribute(this.iframe?.nativeElement, 'srcdoc', this.childDiv)
    }
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
  thirdBodyData
  tableToggler(item) {
    if ((typeof item[0][0] === 'object' && typeof item[0][0] != undefined) || item == 'third_toggle') {
      this.firstBody = !this.firstBody
      this.thirdBody = !this.thirdBody
      this.thirdBodyData = item
    } else if (typeof item[0] === 'object' || item == 'toggle') {
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
  selectArrayChange(myKey, newValue, i) {
    let key = Object.keys(myKey)
    let keyObj = key[0]
    this.codeObj[this.objectKeys][i][keyObj] = newValue
  }
  onDarkMode() {
    this.darkMode = !this.darkMode
  }
  stringify_value(item) {
    let val = Object.values(item)
    return val[0]
  }
  input_icon(item) {
    if (typeof item.value === 'object') {
      return true
    }
    return false
  }
  getFrameHeight() {
    if (this.element.nativeElement.querySelector('#child_dom')?.clientHeight) {
      this.iframeHeight = this.element.nativeElement.querySelector('#child_dom').clientHeight + 100 + 'px'
    } else {
      return this.iframeHeight
    }
  }
}
