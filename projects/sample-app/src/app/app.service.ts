import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/products-new.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }
}