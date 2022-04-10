import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecordItem } from '../../models/record';
import { BrowseService } from '../../services/browse.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  @Input() recordItem!: RecordItem;
  @Input() index!: number;
  @Input() total!: number;

  constructor(
    private location: Location,
    private browseService: BrowseService
  ) { }

  ngOnInit(): void {
    this.location.go("/home/preview");
  }

  onButtonClick(change: number) {
    this.browseService.emitIndexUpdate(this.index+change);
  }
}
