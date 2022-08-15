import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app/app.constant';
import { environment } from '../app/environment/environment';
import { Product } from '../app/product/product';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product | any = '';
  id: number | string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
  }

  getDetails(id: number) {
    this.http
      .get(`${environment.dummyurl}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }
}
