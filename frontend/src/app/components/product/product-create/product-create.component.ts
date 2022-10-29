import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Adicionar Produto',
      icon: 'add',
      routeUrl: '/products/create'
    }
  }

  product: Product = {
    name: '',
    price: 0
  }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
