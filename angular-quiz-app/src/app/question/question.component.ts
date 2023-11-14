import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../service/question.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  name: string = '';
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter = 60;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions()
  }

  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe(res => {
      this.questionList = res.questions;
    })
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

}
