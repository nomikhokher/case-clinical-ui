import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-mutator',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
        <code [innerHtml]="levelify(codify(stringify(payload)))"></code>
      </div>
    </div>
  `,
})
export class WebUiMutatorComponent {
  @Input() payload?: any

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
