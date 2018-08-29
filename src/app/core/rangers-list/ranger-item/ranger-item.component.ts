import {Component, Input, OnInit} from '@angular/core';
import {Ranger} from '../../models/ranger.model';
import {RangersService} from '../../services/rangers.service';
import {RequestBinService} from '../../services/request-bin.service';

@Component({
  selector: 'app-ranger-item',
  templateUrl: './ranger-item.component.html',
  styleUrls: ['./ranger-item.component.scss']
})
export class RangerItemComponent implements OnInit {
  @Input() rangerData;
  isCountingInProgress = false;
  isResetInProgress = false;
  constructor(private rangerService: RangersService,
              private requestBinService: RequestBinService) { }

  ngOnInit() {
  }

  countTrees(ranger: Ranger) {
    this.isCountingInProgress = !this.isCountingInProgress;
    this.rangerData.count += 1;
    this.rangerService.updateRangers(ranger._id, this.rangerData).subscribe((res) => {
      if (res) {
        this.isCountingInProgress = !this.isCountingInProgress;
      }
    });
    this.requestBinService.addEventRequest('Count Trees').subscribe(() => {});
  }

  resetTrees(ranger: Ranger) {
    this.isResetInProgress = !this.isResetInProgress;
    this.rangerData.count = 0;
    this.rangerService.updateRangers(ranger._id, this.rangerData).subscribe((res) => {
      if (res) {
        this.isResetInProgress = !this.isResetInProgress;
      }
    });
    this.requestBinService.addEventRequest(`${ranger.name} count - ${ranger.count}`).subscribe(() => {});
  }

}
