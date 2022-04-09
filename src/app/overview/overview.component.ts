import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  records = this.recordsService.getRecords();

  constructor(
    private recordsService: RecordsService) { }

  ngOnInit(): void {
  }

}
