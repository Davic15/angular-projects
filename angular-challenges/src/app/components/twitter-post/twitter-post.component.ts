import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input() public baseHref = 'https://davic15.github.io/home';
  @Input() public hashTags: string[] = ['FranklinMacias', 'Angular', 'JavaScript'];
  faTwitter = faTwitter;
  constructor(public titleService: Title) {

  }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a Coding God!!.`)
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=frankdavic&url=${route}&text=`
  }
}
