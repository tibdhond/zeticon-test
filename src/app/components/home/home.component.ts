import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowseService } from '../../services/browse.service';
import { RecordItem } from '../../models/record';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemPreviewIndex: number = -1;
  records: RecordItem[] | undefined;
  total: number = 0;
  startIndex: number = 0;

  constructor(
    private recordsService: RecordsService,
    private browseService: BrowseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(() => this.browseService.emitIndexUpdate(-1)); // make sure overview is shown when going to /home
    this.browseService.previewIndexListener().subscribe(index => {
      this.itemPreviewIndex = index;
      if (this.itemPreviewIndex >= this.startIndex) {
        this.recordsService.emitStartIndexUpdate(this.startIndex + 25);
      }
    }); // update local index on child events
    this.recordsService.startIndexListener().subscribe(index => {
      this.startIndex = index
      this.updateData();
    });
  }

  private updateData() {
    this.recordsService.getRecordsMock(this.startIndex).subscribe({
      next: (result) => {
        this.records = result.Results;
        this.total = result.TotalNrOfResults;
      },
      error: (err) => console.log(`An error occured while fetching the data: ${err}`) // Would use something like a toast in a real application
    });

  }

  ngOnChanges() {
    alert("test");
  }
}
