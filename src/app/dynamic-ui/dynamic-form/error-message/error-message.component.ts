import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DynamicFormField } from '../model/dynamic-form-field';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() input: DynamicFormField<string>;
  @Input() form: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {}
}
