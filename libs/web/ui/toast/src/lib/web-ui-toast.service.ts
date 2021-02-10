import { Injectable } from '@angular/core'
import { HotToastService } from '@ngneat/hot-toast'
import { ToastOptions } from '@ngneat/hot-toast/lib/hot-toast.model'
import { Content } from '@ngneat/overview'

@Injectable()
export class WebUiToastService {
  private readonly defaultOptions: ToastOptions = {}

  constructor(private readonly toast: HotToastService) {}

  show(message?: Content, options?: ToastOptions) {
    return this.toast.show(message, { ...this.defaultOptions, ...options })
  }

  error(message?: Content, options?: ToastOptions) {
    return this.toast.error(message, { ...this.defaultOptions, ...options })
  }

  success(message?: Content, options?: ToastOptions) {
    return this.toast.success(message, { ...this.defaultOptions, ...options })
  }

  loading(message?: Content, options?: ToastOptions) {
    return this.toast.loading(message, { ...this.defaultOptions, ...options })
  }

  warning(message?: Content, options?: ToastOptions) {
    return this.toast.warning(message, { ...this.defaultOptions, ...options })
  }
}
