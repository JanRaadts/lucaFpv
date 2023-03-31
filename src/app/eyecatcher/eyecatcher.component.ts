import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-eyecatcher',
  templateUrl: './eyecatcher.component.html',
  styleUrls: ['./eyecatcher.component.css']
})
export class EyecatcherComponent implements AfterViewInit {
  isLoading: boolean = true

  ngAfterViewInit(): void {
    this.isLoading = false
  }

}
