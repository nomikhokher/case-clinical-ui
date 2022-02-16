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
import { Router, NavigationEnd } from '@angular/router'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiToastService } from '@schema-driven/web/ui/toast'
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
  selector: 'ui-mobile-preview',
  template: `
    <style>
      .mobile {
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        border-top: 40px solid #000;
        border-left: 10px solid #000;
        border-right: 10px solid #000;
        border-bottom: 10px solid #000;
        width: 375px;
        height: 812px;
        position: relative;
      }
    </style>

    <!-- <ng-template #headerControls>
      <ng-container *ngIf="githubURL">
        <ui-button
          [label]="'View on Github'"
          [variant]="'white'"
          [icon]="'github'"
          (click)="handleGithubClick()"
        ></ui-button>
      </ng-container>
      
      [controlsTemplate]="headerControls"
    </ng-template> -->

    <!-- [headerMeta]="directoryMeta" -->
    <!-- <ui-page
      containerClass="bg-gray-50 dark:bg-gray-900"
      [breadcrumbs]="breadcrumbs"
      [headerTitle]="title"
      
    > -->
    <div class="mx-auto max-w-7xl px-3 md:px-6 lg:px-8 mt-10">
      <div class="flex gap-10">
        <div class="w-4/5">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200 mt-2 mb-9">{{ title }}</h3>
          <ng-container>
            <ui-mobile-code
              class="mb-10"
              [theme]="darkMode"
              [copyButton]="false"
              [code]="code"
              [language]="'json'"
            ></ui-mobile-code>
          </ng-container>
          <!-- <ui-mobile-mutator [payload]="codeObj"></ui-mobile-mutator> -->
        </div>
        <div class="">
          <div class="flex md:items-center md:flex-row flex-col justify-end pr-4 py-2">
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
                <button
                  class="text-gray-400 h-6 w-6 flex items-center justify-center hover:theme-color-500"
                  [cdkCopyToClipboard]="code"
                  (cdkCopyToClipboardCopied)="copyDone($event)"
                >
                  <ui-icon icon="clipboard" class="h-5 w-5"></ui-icon>
                </button>
              </div>
              <div class="border-l border-gray-200 ml-4 pl-4" *ngIf="activeTab === DISPLAY_MODE.Responsive">
                <p class="flex justify-end text-md font-semibold font-mono py-1">
                  [ {{ width.toFixed(0) }} ] x [ {{ height.toFixed(0) }} ]
                </p>
              </div>
            </div>
          </div>
          <div [ngClass]="darkMode ? 'dark' : ''" class="">
            <p
              *ngIf="activeTab === DISPLAY_MODE.Preview"
              class="float-right font-mono h-3 mr-8 dark:text-white text-gray-500"
            ></p>
            <div
              class="relative dark:bg-gray-600 bg-white bg-opacity-70 mb-20"
              style="border-top-left-radius: 30px;
              border-top-right-radius: 30px;"
            >
              <ng-container *ngIf="activeTab === DISPLAY_MODE.Preview">
                <div class="relative">
                  <div class="mx-auto mt-2 h-mobile w-mobile mobile">
                    <ui-icon
                      class="h-6 w-6"
                      style="left: 140px; position: absolute; top: -30px;color: #5a5959;"
                      icon="minus"
                    ></ui-icon>
                    <ui-icon
                      class="h-6 w-6"
                      style="left: 150px; position: absolute; top: -30px;color: #5a5959;"
                      icon="minus"
                    ></ui-icon>
                    <ui-icon
                      class="h-6 w-6"
                      style="left: 160px; position: absolute; top: -30px;color: #5a5959;"
                      icon="minus"
                    ></ui-icon>
                    <ui-icon
                      class="h-6 w-6"
                      style="left: 170px; position: absolute; top: -30px;color: #5a5959;"
                      icon="minus"
                    ></ui-icon>
                    <ui-icon
                      class="h-6 w-6"
                      style="left: 180px; position: absolute; top: -30px;color: #5a5959;"
                      icon="minus"
                    ></ui-icon>
                    <div class="w-full h-screen" #child_dom id="child_dom">
                      <ng-content> </ng-content>
                    </div>
                  </div>
                </div>
              </ng-container>

              <ng-container *ngIf="activeTab === DISPLAY_MODE.Responsive">
                <div class="relative rounded-md" style="background-color: #6b7280;">
                  <div
                    class="inherit max-w-7xl"
                    [ngStyle]="style"
                    mwlResizable
                    [enableGhostResize]="true"
                    (resizeEnd)="onResizeEnd($event)"
                    [validateResize]="validate"
                    (resizeStart)="onResizeStart($event)"
                    (resizing)="onResize($event)"
                  >
                    <div *ngIf="resposiveSection" class="bg-gray-100 max-w-7xl rounded">
                      <div class="max-w-7xl mx-auto relative p-5">
                        <div
                          [resizeEdges]="{ right: true }"
                          mwlResizeHandle
                          class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4"
                          style="touch-action: none; cursor: ew-resize;"
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
                          class="w-full sm:rounded-r-none"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobilePreviewComponent implements OnInit {
  changeDom: any
  iframeHeight

  style: { position?: string; left: string; top: string; width: string; height: string }
  constructor(
    private readonly codePreview: ServiceCodepreview,
    private changeDetector: ChangeDetectorRef,
    private readonly renderer: Renderer2,
    private element: ElementRef,
    private readonly toast: WebUiToastService,
    private router: Router,
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
  width = 1216
  height = 214
  resposiveSection: boolean = true

  copyDone(done: boolean) {
    if (done) {
      this.toast.success(`Copied to clipboard`, { duration: 3000 })
    } else {
      this.toast.error(`Error copying code to clipboard`)
    }
  }

  get directoryMeta() {
    return [{ icon: 'folder', label: this.directory }]
  }
  ngOnInit() {
    this.lang = this.lang !== undefined ? this.lang : 'html'
    this.router.url === '/dev/carousel-pro' ||
    this.router.url === '/dev/editors' ||
    this.router.url === '/dev/music-player'
      ? (this.resposiveSection = false)
      : (this.resposiveSection = true)
  }
  displayTitle(item) {
    //console.log(Object.keys(item), item['key'])
    return Object.keys(item)[0]
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
  MAX_DIMENSIONS_PX: number = 1216
  validate(event: ResizeEvent): boolean {
    if (event.rectangle.width && (event.rectangle.width > 1225 || event.rectangle.width < 400)) {
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
    if (mode === 1 && this.resposiveSection) {
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

      console.log(this.thirdBodyData)
    } else if (typeof item[0] === 'object' || item == 'toggle') {
      this.firstBody = !this.firstBody
      this.secondBody = !this.secondBody
      this.isTableToggle = true
      this.tableData = item
      console.log(this.tableData)
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

  getTitle(item) {
    return Object.keys(item)
  }
}
