import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  val = '';
  result = 0;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.val = this.form.getRawValue();
    this.result = +this.val['Q1'] + +this.val['Q2'] + +this.val['Q3'] + +this.val['Q4'] + +this.val['Q5'] + +this.val['Q6'] + +this.val['Q7'] + +this.val['Q8'] + +this.val['Q9'] + +this.val['Q10']
  }
}
