import { Component, Input } from '@angular/core'
import { WebUiToastService } from '@schema-driven/web/ui/toast'

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
    <div class="relative rounded-t-none">
      <ngx-numbered-codeblock [code]="code" [languague]="language" [lineNumbers]="true"></ngx-numbered-codeblock>
      <div
        *ngIf="copyButton"
        class="absolute top-4 right-4 w-5 h-5 opacity-50 hover:opacity-100 flex justify-center items-center"
      >
        <button [cdkCopyToClipboard]="code" (cdkCopyToClipboardCopied)="copyDone($event)">
          <ui-icon icon="clipboard"></ui-icon>
        </button>
      </div>
    </div>
  `,
})
export class WebUiCodeComponent {
  @Input() code: string
  @Input() copyButton = true
  @Input() language: UiCodeLanguage = 'json'
  constructor(private readonly toast: WebUiToastService) {}
  copyDone(done: boolean) {
    if (done) {
      this.toast.success(`Copied to clipboard`, { duration: 3000 })
    } else {
      this.toast.error(`Error copying code to clipboard`)
    }
  }
}
