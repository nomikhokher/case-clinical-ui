import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

interface DevCarouselProState {
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Carousel Pro',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/carousel-pro/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Carousel Pro', path: '/dev/carousel-pro' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-carousel-pro/dev-carousel-pro.component.ts',
  items: {
    images: [
      { path: '/assets/carousels/photo-1548625149-9129dad5eef7.jpg' },
      { path: '/assets/carousels/photo-1548625149-d37da68f9a7f.jpg' },
      { path: '/assets/carousels/photo-1489365091240-6a18fc761ec2.jpg' },
      { path: '/assets/carousels/photo-1547691889-841a6f1c5ca6.jpg' },
      { path: '/assets/carousels/photo-1595433562696-a8b1cb8bdad1.jpg' },
      { path: '/assets/carousels/photo-1495563381401-ecfbcaaa60f2.jpg' },
      { path: '/assets/carousels/photo-1534801022022-6e319a11f249.jpg' },
      { path: '/assets/carousels/photo-1524324463413-57e3d8392df1.jpg' },
      { path: '/assets/carousels/photo-1506086679524-493c64fdfaa6.jpg' },
      { path: '/assets/carousels/photo-1569749450723-1836b067fb64.jpg' },
    ],

    imagesForSlider: [
      { path: '/assets/carousels/photo-1444065707204-12decac917e8.jfif' },
      { path: '/assets/carousels/photo-1445452916036-9022dfd33aa8.jfif' },
      { path: '/assets/carousels/photo-1443996104801-80c82e789b18.jfif' },
      { path: '/assets/carousels/photo-1505839673365-e3971f8d9184.jfif' },
      { path: '/assets/carousels/photo-1545420333-23a22b18b8fa.jfif' },
    ],
  },
}

@Injectable()
export class DevCarouselProStore extends ComponentStore<DevCarouselProState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
