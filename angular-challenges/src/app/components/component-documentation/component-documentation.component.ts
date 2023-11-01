import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { RibbonType } from '../ribbon/ribbon-types';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMediaIcon } from '../social-media-bar/models/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/models/social-media.enum';
import { PillType } from '../pill/model/pill-type.enum';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {
  faTag = faTag;
  public isShownOverlay = false;
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false
    }
  ];

  public tabs: {title: string, active: boolean}[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false}
  ];
  public selectedTab = 0;

  public progressValue = 25;
  public loaderType = LoaderType.Loading;
  public toggleValue = false;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' })
  ]

  @ViewChild(SnackbarComponent) public snackBar!: SnackbarComponent;
  public snackbarShow(): void {
    this.snackBar.showMessage('Snackbar Example');
  }

  public loaded = false;

  public socialMedia: SocialMediaIcon[] = [
    { href: 'https://www.facebook.com/franklin.maciasavellan/', type: SocialMedia.Facebook },
    { href: 'https://www.instagram.com/franklin.macias864/', type: SocialMedia.Instagram },
    { href: 'https://www.linkedin.com/in/franklin-david-macias-avellan-704030188/', type: SocialMedia.LinkedIn },
    { href: 'https://twitter.com/FrankDavic', type: SocialMedia.Twitter },
    { href: 'https://www.youtube.com/', type: SocialMedia.YouTube }
  ];

  public PillType = PillType;

}
