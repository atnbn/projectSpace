import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Crew } from './interface/crew';
import { TouchSlideService } from '../services/touch-slide.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  // Slide Test
  @ViewChild('yourSliderElement', { static: false })
  yourSliderElement: ElementRef | null = null;

  //
  selectedCrewMember: Crew | null = null;
  animate: boolean = true;
  crew: Crew[] = [
    {
      name: 'DOUGLAS HURLEY',
      job: 'COMMANDER',
      description:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img: 'assets/crew/image-douglas-hurley.png',
    },
    {
      name: 'MARK SHUTTLEWORTH',
      job: 'MISSION SPECIALIST',
      description:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      img: 'assets/crew/image-mark-shuttleworth.png',
    },
    {
      name: 'VICTOR GLOVER',
      job: 'PILOT',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
      img: 'assets/crew/image-victor-glover.png',
    },
    {
      name: 'ANOUSHEH ANSARI',
      job: 'FLIGHT ENGINEER',
      description:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      img: 'assets/crew/image-anousheh-ansari.png',
    },
  ];
  imageUrls = this.crew.map((object) => object.img);
  constructor(
    private renderer: Renderer2,
    private touchSlideService: TouchSlideService
  ) {}

  onTouchStart(event: TouchEvent) {
    this.touchSlideService.onTouchStart(event);
  }
  onTouchEnd(event: TouchEvent) {
    this.touchSlideService.onTouchEnd(
      event,
      this.nextSlide.bind(this),
      this.previousSlide.bind(this)
    );
  }
  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
  private nextSlide() {
    this.touchSlideService.currentIndex =
      (this.touchSlideService.currentIndex - 1 + this.crew.length) %
      this.crew.length;
    this.setCrewMember(this.crew[this.touchSlideService.currentIndex]);
  }
  private previousSlide() {
    this.touchSlideService.currentIndex =
      (this.touchSlideService.currentIndex + 1) % this.crew.length;
    this.setCrewMember(this.crew[this.touchSlideService.currentIndex]);
  }
  ngOnInit(): void {
    this.selectedCrewMember = this.crew[0];
  }
  setCrewMember(member: Crew) {
    if (this.selectedCrewMember === member) return;
    this.selectedCrewMember = member;
    this.animate = true;
  }
  onAnimationEnd() {
    this.animate = false; // Reset animation trigger
  }
  preloadImages(imageUrls: string[]) {
    for (const url of imageUrls) {
      const img = new Image();
      img.src = url;
    }
  }
}
