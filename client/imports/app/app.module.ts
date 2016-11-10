import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AUTH_DECLARATIONS } from './auth/';
import {SHARED_DECLARATIONS} from './shared/';
import { MAIN_DECLARATIONS } from './home/';
import { SERVICES } from './services/'; 


import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing
      
    ],
    declarations: [
        AppComponent,
        ...AUTH_DECLARATIONS,
        ...SHARED_DECLARATIONS,
        ...MAIN_DECLARATIONS
        ],
    providers: [AuthGuard, ...SERVICES],
    bootstrap: [AppComponent],
})
export class AppModule { }
