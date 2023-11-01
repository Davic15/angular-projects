import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });

  faUser = faUser;
  faComment = faComment;
  faEnvelope = faEnvelope;

  constructor () { }

  public submitMessage() {
    console.log('Check my website.');
  }
}
