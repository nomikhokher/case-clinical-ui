import { Component } from '@angular/core'
import { DevMobileCameraStore } from './dev-mobile-camera.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-mobile>
    </ng-container>
  `,
  providers: [DevMobileCameraStore],
})
export class DevMobileCameraComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCameraStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileCameraModule } from '@schema-driven/web/ui/mobile-camera' \n
<ui-mobile-camera></ui-mobile-camera>
         \n\n        
        `,
      ]
    })
  }
}
