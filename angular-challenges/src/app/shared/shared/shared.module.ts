import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterTermPipe } from 'src/app/pipes/filter-term/filter-term.pipe';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { BannerCutOutComponent } from 'src/app/components/banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SocialMediaBarComponent } from 'src/app/components/social-media-bar/social-media-bar.component';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    BannerCutOutComponent,
    SnackbarComponent,
    FooterComponent,
    TabsComponent,
    SocialMediaBarComponent,
    ModalComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    BannerCutOutComponent,
    SnackbarComponent,
    FooterComponent,
    TabsComponent,
    SocialMediaBarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
