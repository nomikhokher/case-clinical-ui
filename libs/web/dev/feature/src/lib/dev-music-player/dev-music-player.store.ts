import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevMusicPlayerState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Music Player',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/music-player/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Music Player', path: '/dev/music-player' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-music-player/dev-music-player.component.ts',
  items: {
    audioList: [
      {
        url:
          'https://media.hungama.com/c/4/301/c60/44757442/44757442_128.mp3?tXerey56VBPEnAYCLzBEbpl6Nhm93Akmkb0E4YmMZhietzPQ2tR0GWxTyY5LC2gHrbtwDwi2q14WaXwp7vDksPfboYlX13EYDIIfUS5NA9hKMw70RS9Lky48Be4LjTod97rfPg.mp3',
        title: 'Dhadkan',
        cover: 'https://images.hungama.com/c/1/301/c60/44757442/44757442_300x300.jpg',
      },
      {
        url:
          'https://media.hungama.com/c/4/0b0/9b6/54083955/54083955_128.mp3?zWtI17-9GMpeC8GABO0HYf__BbOmUtoPxE7MltjzU2-KD7mbrutySpemOQJljcnb7hVBcA0zAJQTfi7OsfdPS3yYtncjuL0inr9iroRpJMg3lgPNdplnQSysaSdpJcV0F69xog.mp3',
        title: 'Skechers feat. Badshah',
        cover: 'https://images.hungama.com/c/1/acb/c4c/16347020/16347020_300x300.jpg',
      },
      {
        url:
          'https://media.hungama.com/c/4/db7/839/48264397/48264397_128.mp3?sOBx1VkIudls5EbFosrd6SXb6DLxVF9QRjcGrzLcxwbiDuUZoIOsVVYA3gSp3uOGpv9Sx1bDYvvEwdin_TOEm9HFwN9x8E_dDLKjwc22UUYUdfNtwBqNwhtb4_sGeKHyNpkBvw.mp3',
        title: 'Kaise Hua',
        cover: 'https://images.hungama.com/c/1/3b9/3a9/48137830/48137830_300x300.jpg',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Audio List',
      prop: '[audioList]',
      description: 'Holds the url, cover picture and title of an audio.',
      dataType: 'Array',
      typeArray: [
        [
          {
            url:
              'https://media.hungama.com/c/4/301/c60/44757442/44757442_128.mp3?tXerey56VBPEnAYCLzBEbpl6Nhm93Akmkb0E4YmMZhietzPQ2tR0GWxTyY5LC2gHrbtwDwi2q14WaXwp7vDksPfboYlX13EYDIIfUS5NA9hKMw70RS9Lky48Be4LjTod97rfPg.mp3',
          },
          {
            title: 'Dhadkan',
          },
          {
            cover: 'https://images.hungama.com/c/1/301/c60/44757442/44757442_300x300.jpg',
          },
        ],
        [
          {
            url:
              'https://media.hungama.com/c/4/0b0/9b6/54083955/54083955_128.mp3?zWtI17-9GMpeC8GABO0HYf__BbOmUtoPxE7MltjzU2-KD7mbrutySpemOQJljcnb7hVBcA0zAJQTfi7OsfdPS3yYtncjuL0inr9iroRpJMg3lgPNdplnQSysaSdpJcV0F69xog.mp3',
          },
          {
            title: 'Skechers feat. Badshah',
          },
          {
            cover: 'https://images.hungama.com/c/1/acb/c4c/16347020/16347020_300x300.jpg',
          },
        ],
        [
          {
            url:
              'https://media.hungama.com/c/4/db7/839/48264397/48264397_128.mp3?sOBx1VkIudls5EbFosrd6SXb6DLxVF9QRjcGrzLcxwbiDuUZoIOsVVYA3gSp3uOGpv9Sx1bDYvvEwdin_TOEm9HFwN9x8E_dDLKjwc22UUYUdfNtwBqNwhtb4_sGeKHyNpkBvw.mp3',
          },
          {
            title: 'Kaise Hua',
          },
          {
            cover: 'https://images.hungama.com/c/1/3b9/3a9/48137830/48137830_300x300.jpg',
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevMusicPlayerStore extends ComponentStore<DevMusicPlayerState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
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
