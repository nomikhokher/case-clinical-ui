import { ChangeDetectionStrategy, Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core'
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
      <ngx-numbered-codeblock
        [code]="code"
        [style.--color]="color"
        [languague]="language"
        [lineNumbers]="true"
      ></ngx-numbered-codeblock>
      <div
        *ngIf="copyButton"
        class="absolute top-4 right-4 w-5 h-5 opacity-50 hover:opacity-100 flex justify-center items-center"
      >
        <button [cdkCopyToClipboard]="code" (cdkCopyToClipboardCopied)="copyDone($event)">
          <ui-icon icon="clipboard"></ui-icon>
        </button>
      </div>
    </div>
    <link rel="stylesheet" href="light-theme-component.scss" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WebUiCodeComponent {
  @Input() code: string
  @Input() copyButton = true
  @Input() language: UiCodeLanguage = 'json'
  @Input() theme: boolean = false
  color = 'teal'
  color2 = 'red'
  constructor(private readonly toast: WebUiToastService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.theme.currentValue)

    if (changes.theme.currentValue) {
      this.color = 'yellow'
      this.color2 = 'red'
    } else {
      this.color = 'teal'
      this.color2 = 'red'
    }
  }
  copyDone(done: boolean) {
    if (done) {
      this.toast.success(`Copied to clipboard`, { duration: 3000 })
    } else {
      this.toast.error(`Error copying code to clipboard`)
    }
  }
}
