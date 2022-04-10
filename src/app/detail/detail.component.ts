import { Component, OnInit } from '@angular/core';
import { RecordItem } from '../models/record';
import { ActivatedRoute } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recordItem: RecordItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recordId = String(routeParams.get('recordId'));

    this.recordItem = this.recordService.getRecord(recordId);
  }

}
