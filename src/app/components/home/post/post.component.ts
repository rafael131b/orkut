import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  nome="Imagem"
  sentimento="O que está sentindo?"
  constructor() { }

  ngOnInit(): void {
  }

}
