import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TouchSlideService {
  private startX: number = 0;
  public currentIndex = 0;

  onTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(
    event: TouchEvent,
    nextSlide: () => void,
    previousSlide: () => void
  ): void {
    const endX = event.changedTouches[0].clientX;
    const diff = this.startX - endX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      previousSlide();
    }
  }
  constructor() {}
}
