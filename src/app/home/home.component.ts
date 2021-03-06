import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // Wrap every letter in a span
   let textWrapper:any = document.querySelector('.c2 .letters');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

   anime.timeline({loop: true})
     .add({
       targets: '.c2 .line',
       scaleY: [0,1],
       opacity: [0.5,1],
       easing: "easeOutExpo",
       duration: 700
     })
     .add({
       targets: '.c2 .line',
       translateX: [0, textWrapper.getBoundingClientRect().width + 10],
       easing: "easeOutExpo",
       duration: 700,
       delay: 100
     }).add({
       targets: '.c2 .letter',
       opacity: [0,1],
       easing: "easeOutExpo",
       duration: 600,
       offset: '-=775',
       delay: (el: any, i: number) => 34 * (i+1)
     }).add({
       targets: '.c2',
       opacity: 0,
       duration: 1000,
       easing: "easeOutExpo",
       delay: 1000
     });


     }


}
