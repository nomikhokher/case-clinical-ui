import { Component } from '@angular/core'
import { DevPricingPlanStore } from './dev-pricing-plan.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-pricing-plan [planSections]="vm.config.items.planSections" [cards]="vm.config.items.cards">
        </ui-pricing-plan>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPricingPlanStore],
})
export class DevPricingPlanComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevPricingPlanStore) {}

  public codePreview = [
    `import { WebUiPricingPlanModule } from '@schema-driven/web/ui/pricing-plan'\n\n<ui-pricing-plan [planSections]="planSections" [cards]="cards">
    </ui-pricing-plan>\n\n 
    planSections:{
      title:'Pricing Plans',
      description:'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
      buttons:[
        {
          label:'Monthly billing',
          bgColor:'white',
        },
        {
          label:'Yearly billing',
          bgColor:'gray',
        },
      ],
    }, \n\n
    cards:[
      {
        cardHeader: {
          heading:'Hobby',
          description:'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price:12,
          btnLabel:'Buy Hobby',
          btnColor:'gray', // default color is gray
    
        },
        cardBody: {
          heading:"WHAT'S INCLUDED",
          points:[
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading:'Freelancer',
          description:'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price:24,
          btnLabel:'Buy Freelancer',
          btnColor:'gray', // default color is gray
    
        },
        cardBody: {
          heading:"WHAT'S INCLUDED",
          points:[
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading:'Startup',
          description:'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price:36,
          btnLabel:'Buy Startup',
          btnColor:'gray', // default color is gray
    
        },
        cardBody: {
          heading:"WHAT'S INCLUDED",
          points:[
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading:'Enterprise',
          description:'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price:48,
          btnLabel:'Buy Enterprise',
          btnColor:'gray', // default color is gray
    
        },
        cardBody: {
          heading:"WHAT'S INCLUDED",
          points:[
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
            {
              text:'Potenti felis, in cras at at ligula nunc.',
              icon:'check',
            },
          ],
        },
      },
    ],
    }`,
  ]
}
