import { Component, OnInit, Input, Output } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';
import { RecordItem } from '../../models/record';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() records!: RecordItem[];
  @Input() startIndex!: number;
  @Input() total!: number;

  constructor(private recordsService: RecordsService) { }

  ngOnInit(): void {
  }

  // direction: 1 if next pressed, -1 if previous pressed
  pageUpdate(direction: number) {
    this.recordsService.emitStartIndexUpdate(this.startIndex + direction*25)
  }
}
