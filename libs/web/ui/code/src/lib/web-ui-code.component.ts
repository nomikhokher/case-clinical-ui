import { Component, Input } from '@angular/core'

import 'prismjs'

import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-typescript'

export type UiCodeLanguage = 'html' | 'graphql' | 'javascript' | 'json' | 'markdown' | 'typescript'

@Component({
  selector: 'ui-code',
  template: `
    <div class="relative">
      <ngx-numbered-codeblock [code]="code" [languague]="language" [lineNumbers]="false"></ngx-numbered-codeblock>
      <div
        *ngIf="copyButton"
        class="absolute top-0 right-0 w-5 h-5 opacity-50 hover:opacity-100 flex justify-center items-center"
      >
        <button [cdkCopyToClipboard]="code">
          <ui-icon icon="clipboard"></ui-icon>
        </button>
      </div>
    </div>
  `,
})
export class WebUiCodeComponent {
  @Input() code = ''
  @Input() copyButton = true
  @Input() language: UiCodeLanguage = 'json'
}
