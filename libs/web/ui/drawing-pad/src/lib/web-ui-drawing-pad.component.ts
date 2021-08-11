import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core'
import { fromEvent } from 'rxjs'
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'

@Component({
  selector: 'ui-drawing-pad',
  template: `<canvas #canvas></canvas>
    <div>
      <div class="inline-flex space-x-5 my-2">
        <div>
          <input type="color" name="color" id="colorpicker" class=" w-12 h-11 rounded" (change)="colorChange($event)" />
        </div>
        <div class="space-x-2">
          <button class="text-lg px-3 py-1 bg-gray-400 text-gray-50 rounded-l-full" (click)="changeWidth('minus')">
            -
          </button>
          <span class="px-4 py-2 bg-gray-300">{{ lineWidth }}</span>
          <button class="text-lg px-3 py-1 bg-gray-400 text-gray-50 rounded-r-full" (click)="changeWidth('plus')">
            +
          </button>
        </div>
        <div>
          <button class="text-lg rounded px-3 py-1 bg-gray-400 text-gray-50" (click)="ngAfterViewInit()">Clear</button>
        </div>

        <!-- <input type="color" name="color" id="colorpicker" (change)="changeColor($event)")> -->
      </div>
    </div> `,
  styles: ['canvas { border: 1px solid #000; }'],
})
export class WebUiDrawingPadComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef

  @Input() public width
  @Input() public height
  @Input() public lineWidth
  @Input() public strokeStyle

  @Output() val: EventEmitter<string> = new EventEmitter()

  changeWidth(value) {
    this.val.emit(value)
  }

  colorChange(val) {
    this.strokeStyle = val.target.value
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement
    this.cx = canvasEl.getContext('2d')
    this.cx.strokeStyle = val.target.value
  }

  ngOnChanges(changes: SimpleChanges): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement
    this.cx = canvasEl.getContext('2d')
    changes.lineWidth.currentValue
      ? (this.cx.lineWidth = changes.lineWidth.currentValue)
      : (this.cx.lineWidth = this.lineWidth)
  }

  private cx: CanvasRenderingContext2D

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement
    this.cx = canvasEl.getContext('2d')

    canvasEl.width = this.width
    canvasEl.height = this.height

    this.cx.lineWidth = this.lineWidth
    this.cx.lineCap = 'round'
    this.cx.strokeStyle = this.strokeStyle

    this.captureEvents(canvasEl)
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise(),
          )
        }),
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect()

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top,
        }

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top,
        }

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos)
      })
  }

  private drawOnCanvas(prevPos: { x: number; y: number }, currentPos: { x: number; y: number }) {
    if (!this.cx) {
      return
    }

    this.cx.beginPath()

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y) // from
      this.cx.lineTo(currentPos.x, currentPos.y)
      this.cx.stroke()
    }
  }
}
