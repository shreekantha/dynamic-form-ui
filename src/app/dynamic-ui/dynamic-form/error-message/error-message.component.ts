import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormField } from '../common/dynamic-form-field';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() input: DynamicFormField<string>;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
