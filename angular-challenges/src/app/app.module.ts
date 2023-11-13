import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        TopOfPageComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [],
    exports: [
        ToolbarComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
