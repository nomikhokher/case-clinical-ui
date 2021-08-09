import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { ComponentProp } from '@schema-driven/web/ui/preview'
import { NavLink } from '@schema-driven/web/ui/vertical-navigation'

interface DevVerticalNavigationState {
  headerTitle?: string
  directory?: string
  githubURL?: string
  links?: NavLink[]
  loading?: boolean
  breadcrumbs?: Crumb[]
  items?
  component_inputs?: ComponentProp[]
}

let icon = Object.values(UiIcon)

@Injectable()
export class DevVerticalNavigationStore extends ComponentStore<DevVerticalNavigationState> {
  constructor() {
    super({
      headerTitle: 'Vertical Navigation',
      directory: '/libs/web/dev/feature/src/lib/vertical-navigation/vertical-navigation.component.ts',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/vertical-navigation',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Repeater', path: '/dev/repeater' },
      ],
      items: {
        links: [
          { icon: 'home', label: 'Dashboard', route: '.', badge: 5 },
          { icon: 'users', label: 'Team', route: 'team', badge: 12 },
          { icon: 'briefcase', route: 'team', label: 'Projects' },
          { icon: 'calendar', route: 'calendar', label: 'Calendar' },
          { icon: 'document', route: 'document', label: 'Document' },
          { icon: 'report', route: 'report', label: 'Report', badge: 20 },
        ],
      },
      component_inputs: [
        {
          label: 'Links',
          prop: '[links]',
          description: 'List of nav items to be displayed',
          dataType: 'Array',
          typeArray: [
            [{ icon: icon }, { label: 'Dashboard' }, { route: '.' }, { badge: '5' }],
            [{ icon: icon }, { label: 'Team' }, { route: '.' }, { badge: '12' }],
            [{ icon: icon }, { label: 'Projects' }, { route: '.' }, { badge: '' }],
            [{ icon: icon }, { label: 'Calendar' }, { route: '.' }, { badge: '' }],
            [{ icon: icon }, { label: 'Document' }, { route: '.' }, { badge: '' }],
            [{ icon: icon }, { label: 'Report' }, { route: '.' }, { badge: '5' }],
          ],
        },
      ],
    })
  }

  readonly vm$ = this.select(this.state$, (state) => state)
}
