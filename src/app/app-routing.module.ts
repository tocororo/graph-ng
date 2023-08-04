
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundPeopleComponent } from './page-not-found-people/page-not-found-people.component';

import {Layouts} from "./app.component";

import { PeopleActiveResolverService } from './people/people-resolver';

import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DataTransformationComponent } from './data-transformation/data-transformation.component';
import { SparqlQueryViewComponent } from './sparql-query-view/sparql-query-view.component';

const routes: Routes = [
	// {
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        // data: { layout: Layouts.Main },
      },
      {
        path: 'data',
        component: DataTransformationComponent,
        // data: { layout: Layouts.Main },
      }, {
        path: 'query',
        component: SparqlQueryViewComponent,
        // data: { layout: Layouts.Main },
      },


    ],
  },
 
	// {
	// 	path: '**',
	// 	component: PageNotFoundPeopleComponent
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }
