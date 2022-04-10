import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecordItem } from '../models/record';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  @Input() recordItem!: RecordItem;
  @Input() index!: number;
  @Input() total!: number;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.location.go("/home/preview");
  }

}
