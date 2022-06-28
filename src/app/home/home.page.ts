import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3') slideWithNav3: Swiper;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  slideOptions = {
    initialSlide: 1,
    speed: 500,
  }

  slideOptionsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  }
  slideOptionsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
  }
  slideOptionsThree = {
    initialSlide: 0,
    slidesPerView: 3,
  }

  constructor() {
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 990,
        },
        {
          id: 995,
        },
        {
          id: 930,
        },
        {
          id: 941,
        },
        {
          id: 976,
        },
      ]
    };
    this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 390,
        },
        {
          id: 395,
        },
        {
          id: 330,
        },
        {
          id: 341,
        },
        {
          id: 376,
        },
      ]
    };
    this.sliderThree = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 690,
        },
        {
          id: 695,
        },
        {
          id: 630,
        },
        {
          id: 641,
        },
        {
          id: 676,
        },
      ]
    };
  }

  // pindah next slide
  slideNext(slideView) {
    slideView.swiperRef.slideNext(500);
  }
  // pindah previous slide
  slidePrev(slideView) {
    slideView.swiperRef.slidePrev(500);
  }
  // pindah karena slide digeser
  slideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  checkisEnd(object, slideView) {
    object.isEndSlide = slideView?.swiperRef?.isEnd;
    console.log('object.isEndSlide', object);
  }
  checkisBeginning(object, slideView) {
    object.isBeginningSlide = slideView?.swiperRef?.isBeginning;
    console.log('object.isBeginningSlide', object);
  }

  onSwiper(event) {
    console.log(event);
  }

  onSlideChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

}
