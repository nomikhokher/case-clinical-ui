import { Injectable } from '@angular/core'
import { TourService } from 'ngx-ui-tour-core'
import { IMdStepOption } from './interfaces/step-option.interface'

@Injectable()
export class NgxmTourService extends TourService<IMdStepOption> {}
