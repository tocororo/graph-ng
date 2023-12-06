import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
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

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuItemComponent } from "./header/menu-item/menu-item.component";
import { MenuComponent } from "./header/menu/menu.component";
import { HomeComponent } from "./home/home.component";

import { MainlayoutComponent } from "./layout/mainlayout/mainlayout.component";

import { OrgService } from "./org.service";
import { PageNotFoundPeopleComponent } from "./page-not-found-people/page-not-found-people.component";



import { SparqlQueryLayoutComponent } from './sparql-query-layout/sparql-query-layout.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { EntityPanelComponent } from './components/data-transformation/entity-panel/entity-panel.component';
import { OutputsComponent } from './components/data-transformation/outputs/outputs.component';
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { DocumentationViewComponent } from './documentation-view/documentation-view.component';
import { QueryViewComponent } from './sparql-query-layout/query-view/query-view.component';
import { HistorialViewComponent } from './sparql-query-layout/historial-view/historial-view.component';
import { SparqlInputComponent } from "./sparql-query-layout/query-view/sparql-input/sparql-input.component";
import { QueryOutputComponent } from "./sparql-query-layout/query-view/query-output/query-output.component";
import { QueryResultDetailComponent } from "./sparql-query-layout/query-view/query-result-detail/query-result-detail.component";
import { QueryResultComponent } from "./sparql-query-layout/query-view/query-result/query-result.component";
import { DataTransformationComponent } from "./components/data-transformation/data-transformation.component";
import { TransformRulesComponent } from "./components/data-transformation/transform-rules/transform-rules.component";
import { NgxDropzoneModule } from "ngx-dropzone";
import { UploadWidgetComponent } from "./components/data-transformation/upload-widget/upload-widget.component";
import { EditDialogComponent } from './components/data-transformation/edit-dialog/edit-dialog.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { CustomSnakbarComponent } from './components/data-transformation/custom-snakbar/custom-snakbar.component';
import { ChangeMetadataConfigurationDialogComponent } from './components/data-transformation/change-metadata-configuration-dialog/change-metadata-configuration-dialog.component';
import { GraphComponent } from './components/query-view/graph/graph.component';
import { TableResultsComponent } from './components/query-view/table-results/table-results.component';
import { OverviewComponent } from './components/query-view/overview/overview.component';


export function storageFactory(): OAuthStorage {
    return localStorage;
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
    exports: [MainlayoutComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundPeopleComponent,
        FooterComponent,


        MainlayoutComponent,
        DocumentationViewComponent,

        HeaderComponent,
        MenuComponent,
        MenuItemComponent,


        DataTransformationComponent,
        SparqlQueryLayoutComponent,

        TransformRulesComponent,
        EntityPanelComponent,
        OutputsComponent,
        SparqlInputComponent,
        QueryOutputComponent,
        QueryResultComponent,
        QueryResultDetailComponent,
        DocumentationViewComponent,
        QueryViewComponent,
        HistorialViewComponent,
        UploadWidgetComponent,
        EditDialogComponent,
        CustomSnakbarComponent,
        ChangeMetadataConfigurationDialogComponent,
        GraphComponent,
        TableResultsComponent,
        OverviewComponent
        



    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MonacoEditorModule,
        
        
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
        NgxGraphModule,
        NgxDropzoneModule
        ,

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
export class AppModule { }
