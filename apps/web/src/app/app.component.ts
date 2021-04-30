import { Component } from '@angular/core'

@Component({
  selector: 'schema-driven-root',
  template: `
    <div class="{{ themeMode }}">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  public themeMode: string

  ngDoCheck() {
    switch (localStorage.getItem('mode')) {
      case 'auto':
        let desktop_theme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? window.matchMedia('(prefers-color-scheme: dark)')
          : window.matchMedia('(prefers-color-scheme: light)')
        this.themeMode = desktop_theme.media.includes('light') ? 'light' : 'dark'
        desktop_theme.addEventListener('change', (e) => {
          this.themeMode = e.media.includes('light') ? 'dark' : 'light'
        })
        break

      case 'dark':
        this.themeMode = 'dark'
        break

      default:
        this.themeMode = 'light'
        break
    }
  }
}
