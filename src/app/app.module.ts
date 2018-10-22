import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import {DataTableModule} from "angular-6-datatable";
import { SearchPipe } from './components/home/searchPipe';
// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import services
import { WidgetApiService } from './services/widget-api.service';


const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'edit', component:EditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NavbarComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    DataTableModule
  ],
  providers: [
    WidgetApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
