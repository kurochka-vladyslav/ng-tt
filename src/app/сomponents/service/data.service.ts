import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
import itemsList from "../../../api/DATA.json";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): Product[] {
    return itemsList;
  }

}
