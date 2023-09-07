import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GemsAddComponent } from './gems-add/gems-add.component';
import { GemsListComponent } from './gems-list/gems-list.component';
import { GemsEditComponent } from './gems-edit/gems-edit.component';
import { GemsDetailsComponent } from './gems-details/gems-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GemsAddComponent,
    GemsListComponent,
    GemsEditComponent,
    GemsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
