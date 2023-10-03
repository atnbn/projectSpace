import { Component, OnInit } from '@angular/core';
import { Crew } from './interface/crew';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  selectedCrewMember: Crew | null = null;
  animate: boolean = true;
  crew: Crew[] = [
    {
      name: 'DOUGLAS HURLEY',
      job: 'COMMANDER',
      description:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img: '/assets/crew/image-douglas-hurley.png',
    },
    {
      name: 'MARK SHUTTLEWORTH',
      job: 'MISSION SPECIALIST',
      description:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      img: '/assets/crew/image-mark-shuttleworth.png',
    },
    {
      name: 'VICTOR GLOVER',
      job: 'PILOT',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
      img: '/assets/crew/image-victor-glover.png',
    },
    {
      name: 'ANOUSHEH ANSARI',
      job: 'FLIGHT ENGINEER',
      description:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      img: '/assets/crew/image-anousheh-ansari.png',
    },
  ];
  ngOnInit(): void {
    this.selectedCrewMember = this.crew[0];
  }
  setCrewMember(member: Crew) {
    this.selectedCrewMember = member;
    this.animate = true;
  }
  onAnimationEnd() {
    this.animate = false; // Reset animation trigger
  }
}
