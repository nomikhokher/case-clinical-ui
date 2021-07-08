import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { EditorFroalaOptions, ComponentProp } from './model'

export interface Item {
  id?: string
  name?: string
  froalaData?: EditorFroalaOptions
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: ComponentProp[]
  component_outputs?: ComponentProp[]
}
interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface DevEditorState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevEditorStore extends ComponentStore<DevEditorState> {
  // newModel() {
  //   this.model = {}
  // }

  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Editor',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/editor/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Editor', path: '/dev/editor' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-editor/dev-editor.component.ts',
        },
        items: {
          froalaData: {
            firstModel: {
              details: `<div class="fr-wrapper show-placeholder padding-0 border-r-0 border-l-0" dir="auto">
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
                `,
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
        },

        component_inputs: [
          { label: 'Title', prop: '[title]', description: 'This title show the total subscribers', dataType: 'String' },
          {
            label: 'Border none',
            prop: '[border_none]',
            description: 'Remove the border of elements',
            dataType: 'String',
          },
          { label: 'Values', prop: '[values]', description: 'This object hold some props', dataType: 'Object' },
          { label: 'User', prop: '[user]', description: 'This props use for icon', dataType: 'String' },
          { label: 'Link', prop: '[link]', description: 'This props use for routing', dataType: 'String' },
        ],
      },
    })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)

  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
