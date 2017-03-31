import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent { 
	pageTitle: string = 'Acme Product Management';
}
