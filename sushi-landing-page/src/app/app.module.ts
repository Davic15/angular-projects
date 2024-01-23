import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {HeroComponent} from './layout/hero/hero.component';
import {AboutComponent} from './layout/about/about.component';
import {PopularComponent} from './layout/popular/popular.component';
import { TrendingComponent } from './layout/trending/trending.component';
import { SubscriptionComponent } from './layout/subscription/subscription.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PopularComponent,
    TrendingComponent,
    SubscriptionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
