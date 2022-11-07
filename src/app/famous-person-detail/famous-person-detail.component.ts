import { Component, Input, OnInit } from '@angular/core';
import { Complete } from '../devs-api-response';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {
  @Input() dev: Complete = {} as Complete;
  display: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
