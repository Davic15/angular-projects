import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animation';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [
    fadeInOutAnimation,
    slideRightAnimation
  ]
})
export class OtherDocumentationComponent implements IFormDirty {
  public isInDOM = true;
  public form = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  public submit() {
    this.form.reset(this.form.value);
  }

  public selectedTab = 0;
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
}
