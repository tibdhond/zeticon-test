import { Component, OnInit, Input } from '@angular/core';
import { BrowseService } from '../browse.service';
import { RecordItem } from '../models/record';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {

  @Input() recordItem!: RecordItem;
  @Input() index!: number;

  constructor(
    private browseService: BrowseService
  ) { }

  ngOnInit(): void {
  }

  onThumbClick() {
    this.browseService.emitIndexUpdate(this.index);
  }

}
