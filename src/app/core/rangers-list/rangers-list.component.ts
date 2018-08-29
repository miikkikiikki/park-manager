import { Component, OnInit } from '@angular/core';
import {RangersService} from '../services/rangers.service';
import {Ranger} from '../models/ranger.model';

@Component({
  selector: 'app-rangers-list',
  templateUrl: './rangers-list.component.html',
  styleUrls: ['./rangers-list.component.scss']
})
export class RangersListComponent implements OnInit {
  rangersList: Ranger[];

  constructor(private rangersService: RangersService) {
    this.rangersService.getRangers().subscribe((res) => {
      console.log(res);
      this.rangersList = res;
    });
  }

  ngOnInit() {
  }

}
