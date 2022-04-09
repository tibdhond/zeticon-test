import { Component, OnInit, Input } from '@angular/core';
import { RecordItem } from '../models/record';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {

  @Input() recordItem!: RecordItem;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
