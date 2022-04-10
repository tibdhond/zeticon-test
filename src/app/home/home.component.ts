import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../browse.service';
import { RecordItem } from '../models/record';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemPreviewIndex: number = -1;
  records: RecordItem[] | undefined;
  total: number = 0;

  constructor(
    private recordsService: RecordsService,
    private browseService: BrowseService,
    private location: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.location.onPopState(() => this.browseService.emitIndexUpdate(-1));
    this.browseService.previewIndexListener().subscribe(index => this.itemPreviewIndex = index);

    const result = this.recordsService.getRecords();
    this.records = result.Results;
    this.total = result.NrOfResults;
  }
}
