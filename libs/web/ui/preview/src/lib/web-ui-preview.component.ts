import { Component, ElementRef, Input, SimpleChange, SimpleChanges, ViewChild } from '@angular/core'
@Component({
  selector: 'ui-preview',
  template: `
    <nav aria-label="Progress" class="bg-indigo-600 dark:bg-blue-600 p-4 rounded-md rounded-b-none">
      <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
        <li class="md:flex-1" (click)="code_toggler(false)">
          <!-- Completed Step -->
          <a
            class="cursor-pointer group pl-4 py-2 flex flex-col border-l-4 {{
              code_toggle ? 'border-black dark:border-white' : 'border-white dark:border-black'
            }} hover:border-white dark:hover:border-black md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span class="text-xs text-white font-semibold tracking-wide uppercase">Preview</span>
            <span class="text-sm font-medium"></span>
          </a>
        </li>

        <li class="md:flex-1" (click)="code_toggler(true)">
          <!-- Upcoming Step -->
          <a
            class="cursor-pointer group pl-4 py-2 flex flex-col border-l-4 {{
              code_toggle ? 'border-white dark:border-black' : 'border-black dark:border-white'
            }} hover:border-white dark:hover:border-black md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          >
            <span class="text-xs text-white font-semibold tracking-wide uppercase">Code</span>
            <span class="text-sm font-medium"></span>
          </a>
        </li>
      </ol>
    </nav>
    <div class="{{ code_toggle ? 'bg-gray-100' : 'bg-white' }} rounded-md rounded-t-none mb-4">
      <div *ngIf="!code_toggle" class="relative">
        <div
          #dragger
          (mousedown)="dragger_init($event)"
          class="relative sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4"
          style="cursor: ew-resize;"
        >
          <div class="absolute right-0"></div>
          <svg class="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
          </svg>
        </div>

        <div class="p-8 bg-white dark:bg-gray-800" #container>
          <div class="max-w-7xl mx-auto" #child_dom>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
      <div *ngIf="code_toggle">
        <ui-code [copyButton]="true" [code]="code" [language]="'json'"></ui-code>
      </div>
    </div>
  `,
})
export class WebUiPreviewComponent {
  @Input() code?: string
  @Input() lang?: string
  @Input() component_preview?: string
  @Input() component_props?: any
  @ViewChild('child_dom') child_dom: ElementRef
  @ViewChild('dragger') dragger: ElementRef
  @ViewChild('container') container: ElementRef

  public isResizing = false
  public lastDownX = 0
  public draggerDownX = null
  public containerWidth = null

  ngOnChanges(changes: SimpleChanges) {
    console.log({ changes: changes })
  }

  // ngAfterViewChecked() {
  //   this.render_html_code()
  //   document.addEventListener('mousemove', (e) => {
  //     if (!this.isResizing) {
  //       return
  //     }
  //     if (this.containerWidth === null) {
  //       this.containerWidth = this.container.nativeElement.offsetWidth - this.dragger.nativeElement.offsetWidth
  //     }
  //     let change = this.draggerDownX - e.clientX
  //     if (change > 0 && change < this.containerWidth - 300) {
  //       this.dragger.nativeElement.style.right = change.toString() + 'px'
  //       this.container.nativeElement.style.width = (this.containerWidth - change).toString() + 'px'
  //     }
  //   })

  //   document.addEventListener('mouseup', () => {
  //     this.isResizing = false
  //   })
  // }

  ngOnInit() {
    this.lang = this.lang !== undefined ? this.lang : 'html'
  }

  dragger_init(e) {
    this.isResizing = true
    this.lastDownX = e.clientX
    if (this.draggerDownX === null) {
      this.draggerDownX = e.clientX
    }
  }
  code_toggler(value) {
    this.code_toggle = value
  }
  // render_html_code() {
  //   let vars = {
  //     component: this.child_dom.nativeElement.firstChild,
  //     attributes: () => {
  //       return vars.component.attributes
  //     },
  //     extract_name: (attribute) => {
  //       if (attribute.name.includes('ng-reflect-')) {
  //         return attribute.name.split('-')[2]
  //       } else {
  //         return attribute.name
  //       }
  //     },
  //     is_ng: (name) => {
  //       return name.includes('ng-reflect-') ? true : false
  //     },
  //     tag_name: () => {
  //       return vars.component.localName
  //     },
  //     real_name: (path = false) => {
  //       let name_array = vars.component.localName.split('-')
  //       let real_name = ''
  //       for (let x = 0; x < name_array.length; x++) {
  //         if (name_array[x] !== 'ui') {
  //           if (!path) {
  //             real_name += name_array[x].charAt(0).toUpperCase() + name_array[x].slice(1)
  //           } else {
  //             real_name += name_array[x] + '-'
  //           }
  //         }
  //       }
  //       return !path ? real_name : real_name.slice(0, -1)
  //     },
  //     start_tag: () => {
  //       return '<' + vars.tag_name() + '>'
  //     },
  //     end_tag: () => {
  //       return '</' + vars.tag_name() + '>'
  //     },
  //     is_exist: (name) => {
  //       for (const value of vars.attributes()) {
  //         if (value.name === name) {
  //           return true
  //         }
  //       }
  //     },
  //     html: '',
  //     inject: () => {
  //       let start_tag = vars.start_tag().toString().slice(0, -1) + ' \n\t'
  //       let end_tag = '\n >' + vars.end_tag().toString()

  //       let inline_props = vars.html

  //       let external_props = ''
  //       let component_data = ''

  //       if (this.component_props) {
  //         if (this.component_props.length) {
  //           for (let child of this.component_props) {
  //             external_props += '[' + child.name + ']="' + child.name + '_data"'
  //           }
  //         }
  //         if (this.component_props.length) {
  //           for (let child of this.component_props) {
  //             component_data += child.name + '_data =' + JSON.stringify(child.value, null, '\t')
  //           }
  //         }
  //       }

  //       let component = start_tag + external_props + inline_props + end_tag

  //       let decleration =
  //         'import { WebUi' +
  //         vars.real_name(false) +
  //         "Component } from '@schema-driven/web/ui/" +
  //         vars.real_name(true) +
  //         "'"

  //       return decleration + '\n\n' + component + '\n\n' + component_data
  //     },
  //   }

  //   for (const value of vars.attributes()) {
  //     if (vars.is_ng(value.name)) {
  //       if (!vars.is_exist(vars.extract_name(value))) {
  //         if (!value.value.includes('[object Object]')) {
  //           vars.html += ' \n\t' + '[' + vars.extract_name(value) + ']'
  //         }
  //       } else {
  //         if (!value.value.includes('[object Object]')) {
  //           vars.html += ' \n\t' + vars.extract_name(value)
  //         }
  //       }

  //       if (!value.value.includes('[object Object]')) {
  //         vars.html += '=' + '"' + value.textContent + '"' + ' '
  //       }
  //     }
  //   }
  //   this.code = vars.inject()
  // }

  code_toggle = false
}
