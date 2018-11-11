import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'google-site-verification', content: 'Ep--HoNFPIjXzGyD-wQK-JtQ1qqyJINjyusv9RqtIMk' });
  }
}
