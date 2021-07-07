import { Component, ElementRef } from '@angular/core'

@Component({
  selector: 'ui-editor',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code>
          <div [froalaEditor]></div>
        </code>
      </div>
    </div>
  `,
})
export class WebUiEditorComponent {
  constructor(private readonly element: ElementRef) {}
  public timeClear

  ngOnInit(): void {
    this.timeClear = setInterval(() => {
      try {
        ;[
          ...this.element.nativeElement
            .getElementsByClassName('fr-box fr-basic fr-top')[0]
            ?.querySelector('.fr-quick-insert')
            ?.querySelectorAll('.fr-floating-btn'),
        ].forEach((el) => {
          el.style.position = 'relative'
          el.children[0].style.position = 'absolute'
          el.children[0].style.top = '0px'
          clearInterval(this.timeClear)
        })
      } catch (error) {}
    }, 100)
  }

  ngOnDestroy(): void {
    if (this.timeClear) clearInterval(this.timeClear)
  }
}
