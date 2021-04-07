import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-preview',
  template: `
    <div class="mt-4">
      <nav aria-label="Progress" class="bg-indigo-600 p-4 rounded-md">
        <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
          <li class="md:flex-1" (click)="code_toggle = false">
            <!-- Completed Step -->
            <a
              class="group pl-4 py-2 flex flex-col border-l-4 {{
                code_toggle ? 'border-white' : 'border-black'
              }} hover:border-black md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            >
              <span class="text-xs text-white font-semibold tracking-wide uppercase">Preview</span>
              <span class="text-sm font-medium"></span>
            </a>
          </li>

          <li class="md:flex-1" (click)="code_toggle = true">
            <!-- Upcoming Step -->
            <a
              class="group pl-4 py-2 flex flex-col border-l-4 {{
                code_toggle ? 'border-black' : 'border-white'
              }} hover:border-black md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            >
              <span class="text-xs text-white font-semibold tracking-wide uppercase">Code</span>
              <span class="text-sm font-medium"></span>
            </a>
          </li>
        </ol>
      </nav>
    </div>
    <div class="{{ code_toggle ? 'bg-black' : 'bg-white' }} rounded-md">
      <div class="mt-2 p-4">
        <div *ngIf="!code_toggle">
          <!-- PREVIEW COMPONENT -->
          <!-- <ui-step></ui-step> -->
          <ng-content></ng-content>
        </div>
        <div *ngIf="code_toggle">
          <!-- COMPONENT CODE -->
          <ui-code [copyButton]="true" [code]="code" [language]="lang"></ui-code>
        </div>
      </div>
    </div>
  `,
})
export class WebUiPreviewComponent {
  @Input() code?: string
  @Input() lang?: string

  ngOnInit() {
    this.lang = 'html'
  }

  code_toggle = false
}
