import { Component } from '@angular/core';
import { Destination } from './interface/destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  destinationObjects: Destination[] = [
    {
      name: 'MOON',
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      avgDistance: '384400',
      travelDuration: '3',
      img: 'assets/destination/image-moon.png',
    },
  ];
}
