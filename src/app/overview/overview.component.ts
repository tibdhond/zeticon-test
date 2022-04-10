import { Component, OnInit, Input, Output } from '@angular/core';
import { RecordItem } from '../models/record';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() records!: RecordItem[];

  constructor() { }

  ngOnInit(): void {
  }

  thumbClicked() {

  }

}
