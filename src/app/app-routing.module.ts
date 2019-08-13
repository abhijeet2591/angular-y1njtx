import { NgModule,Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicElecmentsComponent } from './basic-elecments/basic-elecments.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
   {
        path: 'BasicElements',
        component: BasicElecmentsComponent
    },
      {
        path: 'AdvancedElements',
        component: AdvancedElementsComponent
    },
      {
        path: 'ReactiveForms',
        component: ReactiveFormsComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }