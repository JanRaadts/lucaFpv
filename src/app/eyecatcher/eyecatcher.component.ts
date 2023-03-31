import { Component,AfterViewInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-eyecatcher',
  templateUrl: './eyecatcher.component.html',
  styleUrls: ['./eyecatcher.component.css']
})
export class EyecatcherComponent implements AfterViewInit {
  isLoading: boolean = true

  ngAfterViewInit(): void {
    this.isLoading = false
  }

  options: AnimationOptions = {    
    path: '../../assets/arrow animation.json'  
  };  

   // This is the component function that binds to the animationCreated event from the package  
 onAnimate(animationItem: AnimationItem): void {    
  // console.log(animationItem);  
}

}
