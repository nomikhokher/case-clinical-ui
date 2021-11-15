import { Component } from '@angular/core'
import { DevMusicPlayerStore } from './dev-music-player.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-music-player [audioList]="vm.config.items.audioList"></ui-music-player>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMusicPlayerStore],
})
export class DevMusicPlayerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMusicPlayerStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiNewsletterModule } from '@schema-driven/web/ui/newsletter'' \n\n 
        <ui-newsletter
        [heading]="vm.config.items.heading"
        [description]="vm.config.items.description"
        [bgColor]="vm.config.items.bgColor"
        [buttonText]="vm.config.items.buttonText"
        [tagLine]="vm.config.items.tagLine"
      >
      </ui-newsletter>\n\n
      
        audioList = ${JSON.stringify(result.config.items.audioList, null, '\t')}\n
        `,
      ]
    })
  }
}
