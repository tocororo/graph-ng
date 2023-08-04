
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundPeopleComponent } from './page-not-found-people/page-not-found-people.component';

import {Layouts} from "./app.component";

import { PeopleActiveResolverService } from './people/people-resolver';

import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { DataTransformationComponent } from './data-transformation/data-transformation.component';
import { SparqlQueryLayoutComponent } from './sparql-query-layout/sparql-query-layout.component';
import { DocumentationViewComponent } from './documentation-view/documentation-view.component';
import { QueryViewComponent } from './sparql-query-layout/query-view/query-view.component';
import { HistorialViewComponent } from './sparql-query-layout/historial-view/historial-view.component';

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
      }, 
      {
        path: 'query',
        component: SparqlQueryLayoutComponent,
        
        children: [
          {path: 'documentation',
          component: DocumentationViewComponent},
          {path: 'view',
          component: QueryViewComponent},
          {path: 'historial',
          component: HistorialViewComponent}
        ]
        
      }


    ]
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
