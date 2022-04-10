import { Component, OnInit } from '@angular/core';
import { RecordItem } from '../../models/record';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recordItem: RecordItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recordId = String(routeParams.get('recordId'));

    this.recordsService.getRecordMock(recordId).subscribe({
      next: result => {
        this.recordItem = result;
      },
      error: err => console.log(`Something went wrong while fetching the record: ${err}`)
    });
  }

}
