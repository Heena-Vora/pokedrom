import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HttpService } from './services/http.service';
import { LocalStoreService } from './services/local-store.service';
import { PokemonService } from './services/pokemon.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [AppComponent, DashboardComponent, SearchComponent, LoginComponent, SearchPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, ],
  providers: [HttpService, LocalStoreService, PokemonService, UserService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
