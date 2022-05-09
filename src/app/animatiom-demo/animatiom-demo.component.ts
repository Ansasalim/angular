import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animatiom-demo',
  templateUrl: './animatiom-demo.component.html',
  styleUrls: ['./animatiom-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style(
        {
          height:'250px',
          backgroundColor:'red'
        }
      )),
      state('close',style(
        {
          height:'250px',
          backgroundColor:'green'
        }
      )),
transition('open=>close',[
  animate('2s')
]),
transition('close=>open',[
  animate('1s')
]),
    ])
  ]
})
export class AnimatiomDemoComponent implements OnInit {

  isOpen=true

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen
  }
}
