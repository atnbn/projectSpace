import { Component, OnInit } from '@angular/core';
import { CelestialObject } from './interface/celestialobject';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  selectedObject: CelestialObject | null = null;
  animate: boolean = true;
  objects: CelestialObject[] = [
    {
      name: 'MOON',
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      travelDistance: '384,400 KM',
      travelTime: '3 DAYS',
      img: '/assets/destination/image-moon.png',
    },
    {
      name: 'MARS',
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      travelDistance: '225 MIL. KM',
      travelTime: '9 MONTHS',
      img: '/assets/destination/image-mars.png',
    },
    {
      name: 'EUROPA',
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      travelDistance: '628 MIL. KM',
      travelTime: '3 YEARS',
      img: '/assets/destination/image-europa.png',
    },
    {
      name: 'TITAN',
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      travelDistance: '1.6 BIL. KM',
      travelTime: '7 YEARS',
      img: '/assets/destination/image-titan.png',
    },
  ];

  constructor() {
    this.selectedObject = this.objects[0];
  }

  ngOnInit() {
    // Set the default selected object to Moon
    this.selectedObject = this.objects[0];
  }

  setObject(object: CelestialObject) {
    if (this.selectedObject === object) return;
    else {
      this.selectedObject = object;
      this.animate = true;
    }
  }
  onAnimationEnd() {
    this.animate = false; // Reset animation trigger
  }
}
