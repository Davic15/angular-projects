import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from './models/social-media-icon.interface';
import { SocialMedia } from './models/social-media.enum';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  @Input() public socialMedia: SocialMediaIcon[] = [];
  public SocialMedia = SocialMedia;
}
