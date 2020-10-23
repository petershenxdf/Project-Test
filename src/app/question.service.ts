import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'Q1',
        label: '1. How is COVID-19 passed on?',
        options: [
          {key: 10, data: 10,  value: 'Through droplets that come from your mouth and nose when you cough or breathe out'},
          {key: 0,  value: 'In sexual fluids, including semen, vaginal fluids or anal mucous'},
          {key: 0,   value: 'By drinking unclean water'},
          {key: 0, value: 'All of the above'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'Q2',
        label: '2. What are the common symptoms of COVID-19?',
        options: [
          {key: 0,  value: 'A new and continuous cough'},
          {key: 0,  value: 'Fever'},
          {key: 0,   value: 'Tiredness'},
          {key: 10, value: 'All of the above'}
        ],
        order: 4
      }),
      new DropdownQuestion({
        key: 'Q3',
        label: '3. Can you always tell if someone has COVID-19?',
        options: [
          {key: 10,  value: 'No – not everyone with COVID-19 has symptoms'},
          {key: 0,  value: 'Yes – it will be obvious, a person with COVID-19 coughs a lot'},
          {key: 0,   value: 'Yes – you can tell just by where a person comes from, their race and ethnicity'},
        ],
        order: 5
      }),
      new DropdownQuestion({
        key: 'Q4',
        label: '4. Can washing your hands protect you from COVID-19?',
        options: [
          {key: 0,  value: 'Yes – but only if you use a strong bleach'},
          {key: 10,  value: 'Yes – normal soap and water or hand sanitizer is enough'},
          {key: 0,   value: 'No – Washing your hands doesn’t stop COVID-19'},
        ],
        order: 6
      }),
      new DropdownQuestion({
        key: 'Q5',
        label: '5. Are people living with HIV always more at risk?',
        options: [
          {key: 0,  value: 'Yes – people with HIV have weaker immune systems'},
          {key: 10,  value: 'No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk'},
        ],
        order: 7
      }),
      new DropdownQuestion({
        key: 'Q6',
        label: '6. When should fabric face masks be worn?',
        options: [
          {key: 0,  value: 'On public transport'},
          {key: 0,  value: 'In confined or crowded spaces'},
          {key: 0,   value: 'In small shops'},
          {key: 10, value: 'All of the above'}
        ],
        order: 8
      }),
      new DropdownQuestion({
        key: 'Q7',
        label: '7. Can COVID-19 be cured?',
        options: [
          {key: 0,  value: 'Yes – Hot drinks can cure COVID-19'},
          {key: 0,  value: 'No – COVID-19 is a death sentence'},
          {key: 10,   value: 'No – but most people get better by themselves'},
        ],
        order: 9
      }),
      new DropdownQuestion({
        key: 'Q8',
        label: '8. Which of the following is an example of physical distancing? ',
        options: [
          {key: 10,  value: 'You stop going to crowded places and visiting other people’s houses'},
          {key: 0,  value: 'You stop talking to the people you live with'},
          {key: 0,   value: 'You stop speaking to your friends on the phone'},
        ],
        order: 10
      }),
      new DropdownQuestion({
        key: 'Q9',
        label: '9. How can people living with HIV protect themselves from COVID-19?',
        options: [
          {key: 0,  value: 'Wash their hands regularly and follow the physical distancing advice'},
          {key: 0,  value: 'Keep taking their antiretroviral treatment'},
          {key: 0,   value: 'Exercise regularly, eat well and look after their mental health'},
          {key: 10, value: 'All of the above'}
        ],
        order: 11
      }),
      new DropdownQuestion({
        key: 'Q10',
        label: '10. What does COVID-19 stand for?',
        options: [
          {key: 0,  value: 'It is a term for Coronavirus Disease 19, because it is the 19th strain of coronavirus discovered.'},
          {key: 10,  value: 'It is a term that stands for Coronavirus Disease 2019, the year it was first identified.'},
        ],
        order: 11
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        order: 1
      }),

      new TextboxQuestion({
        key: 'LastName',
        label: 'Last Name',
        order: 2
      }),
      new TextboxQuestion({
        key: 'Email',
        label: 'Email',
        type: 'email',
        order: 2
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
