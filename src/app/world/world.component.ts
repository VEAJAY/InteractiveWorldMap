import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit, OnDestroy {
  countryInfo: any;
  
  private apiDataSubscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.apiDataSubscription = this.dataService.getApiDataObservable().subscribe((data) => {
      this.countryInfo = data;
    });
  }

  ngOnDestroy(): void {
    if (this.apiDataSubscription) {
      this.apiDataSubscription.unsubscribe();
    }
  }
}