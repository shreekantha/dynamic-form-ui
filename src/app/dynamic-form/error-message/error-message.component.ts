import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../common/service-form-field';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
