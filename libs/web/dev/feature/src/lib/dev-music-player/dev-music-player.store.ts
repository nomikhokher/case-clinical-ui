import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
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
        url: '/assets/audio/Ariana Grande-7 rings.mp3',
        title: 'Ariana Grande-7 rings',
        cover: '',
      },
      {
        url: '/assets/audio/Ed Sheera -Shape of You.mp3',
        title: 'Ed Sheera -Shape of You',
        cover: '',
      },
      {
        url: '/assets/audio/Katy Perry-Dark Horse.mp3',
        title: 'Katy Perry-Dark Horse',
        cover: '',
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
            url: '/assets/audio/Ariana Grande-7 rings.mp3',
          },
          {
            title: 'Ariana Grande-7 rings',
          },
          {
            cover: '',
          },
        ],
        [
          {
            url: '/assets/audio/Ed Sheera -Shape of You.mp3',
          },
          {
            title: 'Ed Sheera -Shape of You',
          },
          {
            cover: '',
          },
        ],
        [
          {
            url: '/assets/audio/Katy Perry-Dark Horse.mp3',
          },
          {
            title: 'Katy Perry-Dark Horse',
          },
          {
            cover: '',
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
