import { Component, OnInit } from '@angular/core';
import { Tech } from './interface/tech';
import { TouchSlideService } from '../services/touch-slide.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  currentTech: Tech | null = null;
  animate: boolean = true;
  objects: Tech[] = [
    {
      techtype: 'LAUNCH VEHICLE',
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      images: [
        {
          large: 'assets/technology/image-launch-vehicle-portrait.jpg',
          medium: 'assets/technology/image-launch-vehicle-landscape.jpg',
        },
      ],
    },
    {
      techtype: 'SPACE PORT',
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      images: [
        {
          large: 'assets/technology/image-spaceport-portrait.jpg',
          medium: 'assets/technology/image-spaceport-landscape.jpg',
        },
      ],
    },
    {
      techtype: 'SPACE CAPSULE',
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      images: [
        {
          large: 'assets/technology/image-space-capsule-portrait.jpg',
          medium: 'assets/technology/image-space-capsule-landscape.jpg',
        },
      ],
    },
  ];
  imageUrls: any[] = this.objects.map((object) => object.images);

  responsiveImageUrl: string = '';
  constructor(private touchSlideService: TouchSlideService) {
    this.currentTech = this.objects[0];
  }
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

  private nextSlide() {
    this.touchSlideService.currentIndex =
      (this.touchSlideService.currentIndex - 1 + this.objects.length) %
      this.objects.length;
    this.setTech(this.objects[this.touchSlideService.currentIndex]);
  }

  private previousSlide() {
    this.touchSlideService.currentIndex =
      (this.touchSlideService.currentIndex + 1) % this.objects.length;
    this.setTech(this.objects[this.touchSlideService.currentIndex]);
  }
  ngOnInit() {
    this.currentTech = this.objects[0];
    const screenWidth = window.innerWidth;
    this.preloadImages(this.imageUrls);

    if (screenWidth <= 900) {
      this.responsiveImageUrl = this.currentTech.images[0].medium;
    } else {
      this.responsiveImageUrl = this.currentTech.images[0].large;
    }
  }

  setTech(tech: Tech) {
    this.currentTech = tech;

    this.animate = true;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 900) {
      this.responsiveImageUrl = tech.images[0].medium;
      console.log(this.responsiveImageUrl);
    } else {
      this.responsiveImageUrl = tech.images[0].large;
    }
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
