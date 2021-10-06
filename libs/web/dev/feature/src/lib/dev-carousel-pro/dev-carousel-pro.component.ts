import { Component } from '@angular/core'
import { DevCarouselProStore } from './dev-carousel-pro.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview class="space-y-10">
        <div>
          <h1 class="text-3xl font-bold">With Dots</h1>
          <ui-carousel-pro
            [carouselType]="'default'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div>
          <h1 class="text-3xl font-bold">Delay of Half Second</h1>
          <ui-carousel-pro
            [carouselType]="'delay'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div>
          <h1 class="text-3xl font-bold">Methods</h1>
          <ui-carousel-pro
            [carouselType]="'pro'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">With Counter</h1>
          <ui-carousel-pro
            [carouselType]="'counter'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">Without Arrows</h1>
          <ui-carousel-pro
            [carouselType]="'withoutArrow'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">With Bottom Scrollbar</h1>
          <ui-carousel-pro
            [carouselType]="'scrollbar'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">With Three Slides</h1>
          <ui-carousel-pro
            [carouselType]="'threeSlides'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">With Five Slides</h1>
          <ui-carousel-pro
            [carouselType]="'fiveSlides'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold">Use Case</h1>
          <ui-carousel-pro
            [carouselType]="'useCase'"
            [images]="images"
            [imagesForSlider]="imagesForSlider"
          ></ui-carousel-pro>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCarouselProStore],
})
export class DevCarouselProComponent {
  images = [
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
  ]

  imagesForSlider = [
    { path: '/assets/carousels/photo-1444065707204-12decac917e8.jfif' },
    { path: '/assets/carousels/photo-1445452916036-9022dfd33aa8.jfif' },
    { path: '/assets/carousels/photo-1443996104801-80c82e789b18.jfif' },
    { path: '/assets/carousels/photo-1505839673365-e3971f8d9184.jfif' },
    { path: '/assets/carousels/photo-1545420333-23a22b18b8fa.jfif' },
  ]

  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCarouselProStore) {}

  ngOnInit(): void {}
}
