import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { GnbComponent } from './common/components/gnb/gnb.component';
import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { BackendModule } from './common/backend/backend.module';
import { ErrorModule } from './common/error/error.module';
import { ServicesModule } from './common/services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        GnbComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServicesModule,
        BackendModule,
        ErrorModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
