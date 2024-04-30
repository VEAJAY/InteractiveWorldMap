import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})

export class SvgMapComponent implements AfterViewInit {
  @ViewChild('svg') mySvg!: ElementRef;

  constructor(private http: HttpClient, private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    const paths = this.mySvg.nativeElement.querySelectorAll('path');
    
    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('mouseenter', () => {
        const pathID = path.getAttribute('id') as string;
        this.getData(pathID)
      })
    });
  }

  private getData(countryName: string) {
    const url: string = `https://api.worldbank.org/v2/country/${countryName}?format=json`
    this.http.get<any[][]>(url).subscribe(response => {
      const data = response[1][0]
      this.dataService.setApiData(data);

      this.cdr.detectChanges();
    },

    (error: Error) => {
      console.log(error)
    })
  }
}
