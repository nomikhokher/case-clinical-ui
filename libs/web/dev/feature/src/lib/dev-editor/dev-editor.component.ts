import { Component } from '@angular/core'
import { DevEditorStore } from './dev-editor.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- Component:  -->
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
      >
        <ui-editor
          [froalaOptions]="vm.config.items.froalaData.froalaOptions"
          [modelData]="vm.config.items.froalaData.firstModel"
        ></ui-editor>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevEditorStore],
})
export class DevEditorComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevEditorStore) {}

  public codePreview = [
    `import { WebUiEditorModule } from '@schema-driven/web/ui/editor' \n\n 
    <ui-editor
      [froalaOptions]="vm.config.items.froalaData.froalaOptions"
      [modelData]="vm.config.items.froalaData.firstModel"
  ></ui-editor> \n\n
  froalaData: {
    firstModel: {
      details: '<div class="fr-wrapper show-placeholder padding-0 border-r-0 border-l-0" dir="auto">
        <div class="fr-element fr-view border-0" dir="auto" contenteditable="true" aria-disabled="false" spellcheck="true">
        <p><br></p>
        </div>
        <span class="fr-placeholder border-0" style="font-size: 14px; line-height: 22.4px; margin-top: 0px; padding-top: 20px; padding-left: 20px; margin-left: 0px; padding-right: 20px; margin-right: 0px; text-align: left;">nothing inserted yet.</span>
        </div>
        <div class="fr-second-toolbar border-0"">
        <a id="fr-logo" href="https://froala.com/wysiwyg-editor" target="_blank" title="Froala WYSIWYG HTML Editor">
        <span>Powered by</span>
        
        </a>
        <span class="fr-counter" style="bottom: 1px; margin-right: 3px;">Characters : 0</span></div>
        ',
    },
    froalaOptions: {
      charCounterCount: false,
      fileUpload: false,
      attribution: false,
      toolbarButtons: [
        ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
        ['fontFamily', 'fontSize', 'backgroundColor', 'textColor'],
        [
          'paragraphFormat',
          'align',
          'formatOL',
          'formatUL',
          'outdent',
          'indent',
          '-',
          'insertImage',
          'embedly',
          'insertTable',
          'insertLink',
        ],
        ['specialCharacters', 'insertHR', 'clearFormatting'],
        ['print', 'spellChecker'],
        ['undo', 'redo'],
      ],
      toolbarSticky: false,
      language: 'de',
      fontFamily: {
        arial: 'Arial',
        courier: 'Courier New',
        georgia: 'Georgia',
        impact: 'Impact',
        lucida: 'Lucida Console',
        tahoma: 'Tahoma',
        times: 'Times New Roman',
        verdana: 'Verdana',
      },
      events: {
        froalaEditorEvent: function (e, editor, files) {
          if (files.length) {
            // Create a File Reader.
            const reader = new FileReader()

            // Set the reader to insert images when they are loaded.
            reader.onload = function (eLoad) {
              const result = (<any>eLoad.target).result
              editor.image.insert(result, null, null, editor.image.get())
            }

            // Read image as base64.
            reader.readAsDataURL(files[0])
          }

          editor.popups.hideAll()

          // Stop default upload chain.
          return false
        },
      },
      contentChanged: () => {
        // Nothing
        //console.log('contentChanged', this.model.details)
      },
    },
  },
  
  `,
  ]
}
