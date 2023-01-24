class SlideView {
  constructor({first, second, third}) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.articleSlides = [this.first, this.second, this.third];
    
  }
  
  showNextSlide() {
   
   
   setTimeout(this.showNextSlide, 1000);
  }
  
}
export default SlideView;
// start() {
//   if (!this.intervalId) {
//     this.intervalId = setInterval(() => {
//       this.secondsElapsed++;
//       this.updateTime(this.secondsElapsed);
//     }, 1000);
//   }
// }


// window.onload = changeSlide () {
//   this.articleSlides = [ this.first, this.second, this.third ];
//   this.index = 0;
//   function showNextSlide() {
//     changeSlide(this.articleSlides[index]);
//   index = (index + 1) % this.articleSlides.length;
//    }
//   showNextSlide();
//   window.setInterval(showNextSlide, 1000);
// };