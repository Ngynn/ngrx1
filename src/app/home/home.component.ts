import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Cat } from '../models/cat.model';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  catList: Cat[] = [];
  constructor(private httpService: HttpService) {
    httpService.getCatImg().pipe(
      mergeMap((catImages) => {
        console.log(catImages);
        this.catList = [...catImages];
        return httpService.getCatFact();
      })
    ).subscribe((value) => {
      console.log(value)
      let catFacts = [...value.data];
      this.catList.forEach((cat, index) => {
        cat.fact = catFacts[index].fact;
      });
      console.log(this.catList);
      
      
    })
  }
}
