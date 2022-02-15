import { Component, Input, SimpleChanges } from '@angular/core'

@Component({
  selector: 'ui-mobile-mutator',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow w-full ">
      <div class="grid grid-flow-col">
        <div class="col-span-1 text-center bg-gray-100 font-mono pt-2">
          <b class="block" *ngFor="let line of renderedLines; let i = index">{{ i + 1 }}</b>
        </div>
        <div class="col-span-11 bg-white">
          <code [innerHtml]="renderedPayload"></code>
        </div>
      </div>
    </div>
  `,
})
export class WebUiMobileMutatorComponent {
  @Input() payload?: any
  renderedPayload: string
  renderedLines: string[]

  constructor() {
    this.renderedPayload = ''
    this.renderedLines = []
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderedPayload = this.innerify(changes.payload.currentValue)
    this.renderedLines = this.lines(this.renderedPayload, '<br>')
    //console.log(this.renderedLines)
  }

  innerify(payload) {
    return this.levelify(this.codify(this.stringify(payload)))
  }

  numerify(payload: string) {
    if (!this.is_usefull(payload)) {
      return ''
    }
    if (payload.includes('<br>')) {
      const split_lines = this.lines(payload, '<br>')
      payload = ''
      split_lines.forEach((line, index) => {
        const index_space = split_lines.length.toString().length - (index + 1).toString().length
        payload += `<i>${index + 1}</i>${'&nbsp;'.repeat(index_space + 1)}|&nbsp;` + '<br>'
      })
      return payload
    } else {
      return '<i>1</i>|' + payload
    }
  }

  lines(payload: string, breakpoint: string) {
    if (!this.is_usefull(payload)) {
      return []
    }
    let splitted_payload = payload.split(breakpoint)
    splitted_payload.push('')
    return splitted_payload
  }

  is_usefull(payload) {
    if (payload !== null && payload !== undefined && payload !== '') {
      return true
    }
    return false
  }

  stringify(payload) {
    if (!this.is_usefull(payload)) {
      return ''
    }
    return JSON.stringify(payload)
  }

  codify(payload: string) {
    if (!this.is_usefull(payload)) {
      return ''
    }
    const patterns = [
      {
        breakpoint: '[',
        inject: '<br>',
        before: false,
      },
      {
        breakpoint: ']',
        inject: '<br>',
        before: true,
      },
      {
        breakpoint: '{',
        inject: '<br>',
        before: false,
      },
      {
        breakpoint: '}',
        inject: '<br>',
        before: true,
      },
      {
        breakpoint: ',',
        inject: '<br>',
        before: false,
      },
    ]
    patterns.forEach((pattern) => {
      payload = this.breakify(payload, pattern.breakpoint, pattern.inject, pattern.before)
    })
    return payload
  }

  breakify(payload: string, breakpoint: string, inject: string, before: boolean = true) {
    if (!this.is_usefull(payload)) {
      return ''
    }
    const pattern = new RegExp('\\' + breakpoint, 'g')
    return payload.replace(pattern, before ? `${inject}${breakpoint}` : `${breakpoint}${inject}`)
  }

  levelify(payload: string) {
    if (!this.is_usefull(payload)) {
      return ''
    }
    let iterator = -1 - 4
    while ((iterator = payload.indexOf('<br>', iterator + 4)) >= 0) {
      const level = this.levelAt(payload, iterator + 4)
      const addon = '&nbsp;'.repeat(level)
      payload = payload.substring(0, iterator + 4) + addon + payload.substring(iterator + 4, payload.length)
      iterator += addon.length
    }
    return payload
  }

  levelAt(payload: string, at_index: number) {
    let level = 0
    const gainers = ['{', '[']
    const losers = ['}', ']']
    ;[...payload].forEach((char, index) => {
      if (index <= at_index) {
        if (gainers.includes(char)) {
          level++
        }
        if (losers.includes(char)) {
          level--
        }
      }
    })

    return level * 2
  }
}
