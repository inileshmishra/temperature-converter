import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temperature-converter';

  public celcius: any;

  public fahrenheit: any;

  converToFahrenheit(): void {
    this.fahrenheit = Math.round((Number(this.celcius) * 1.8 + 32)*10)/10;
  }

  convertToCelcius(): void {
    this.celcius = Math.round(((Number(this.fahrenheit) - 32) * (5 / 9))*10)/10;
  }
}
