import { Component, OnInit } from '@angular/core';
import { DevsAPIResponse } from '../devs-api-response';
import { DevsService } from '../devs.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {
  devsAPIResponse: DevsAPIResponse = {} as DevsAPIResponse;

  constructor(private devsService: DevsService) { }

  ngOnInit(): void {
    this.devsService.getDevs().subscribe((response: DevsAPIResponse) =>{this.devsAPIResponse = response;});
  }

}
