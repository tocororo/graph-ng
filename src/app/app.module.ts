import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MarkdownModule } from "ngx-markdown";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

import { OAuthModule, OAuthStorage } from "angular-oauth2-oidc";
import {
  AngularMaterialModule,
  AuthenticationModule,
  CoreModule,
  Environment, OrganizationServiceNoAuth, SearchModule,
  SearchService,
  SourceServiceNoAuth,
  StaticsModule,
  TocoFormsModule, OrganizationsModule
} from "toco-lib";

import { allowedURLS, environment } from "src/environments/environment";

import { NgxDropzoneModule } from "node_modules/ngx-dropzone";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuItemComponent } from "./header/menu-item/menu-item.component";
import { MenuComponent } from "./header/menu/menu.component";
import { HomeComponent } from "./home/home.component";

import { MainlayoutComponent } from "./layout/mainlayout/mainlayout.component";
import { PeopleLayoutComponent } from "./layout/people-layout/people-layout.component";
import { OrgService } from "./org.service";
import { PageNotFoundPeopleComponent } from "./page-not-found-people/page-not-found-people.component";
import { GeneralTabComponent } from "./people-view/general-tab/general-tab.component";
import { PeopleViewComponent } from "./people-view/people-view.component";
import { SearchListComponent } from "./search-list/search-list.component";
import { SearchComponent } from "./search/search.component";
import { SelectOrgComponent } from "./select-org/select-org.component";
import { DataTransformationComponent } from './data-transformation/data-transformation.component';

import { SparqlQueryViewComponent } from './sparql-query-view/sparql-query-view.component';
import { TransformRulesComponent } from './transform-rules/transform-rules.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { EntityPanelComponent } from './entity-panel/entity-panel.component';


export function storageFactory(): OAuthStorage {
  return localStorage;
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
    exports: [MainlayoutComponent, PeopleLayoutComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundPeopleComponent,
        FooterComponent,
        SearchComponent,
        SearchListComponent,
        PeopleViewComponent,
        MainlayoutComponent,
        PeopleLayoutComponent,
        GeneralTabComponent,
        HeaderComponent,
        MenuComponent,
        MenuItemComponent,

        SelectOrgComponent,
         DataTransformationComponent,
         SparqlQueryViewComponent,
         SparqlQueryViewComponent,
         TransformRulesComponent,
         EntityPanelComponent,



    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        NgxDropzoneModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        ReactiveFormsModule,
        FlexLayoutModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
        }),
        MatButtonModule,
        MatTooltipModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatTabsModule,
        MatChipsModule,
        MatExpansionModule,
        MatListModule,
        TocoFormsModule,
        MatRadioModule,
        MatCheckboxModule,
        FormsModule,
        AngularMaterialModule,
        CoreModule,
        StaticsModule,
        TocoFormsModule,
        SearchModule,
        AuthenticationModule,
        OrganizationsModule,
        AppRoutingModule,
        FlexLayoutModule,
        ScrollingModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: allowedURLS,
                sendAccessToken: true,
            },
        }),
    ],
    providers: [
        SearchService,
        SourceServiceNoAuth,
        OrganizationServiceNoAuth,
        OrgService,
        { provide: Environment, useValue: environment },
        { provide: OAuthStorage, useFactory: storageFactory },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
