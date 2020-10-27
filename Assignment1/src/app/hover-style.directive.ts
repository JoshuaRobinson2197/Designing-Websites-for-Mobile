import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() decoration: string;
  constructor(private elm: ElementRef) { }

  @HostListener('mouseover') onMouseOver(): void{
    this.applyStyle();
  }

  @HostListener('mouseout') onMouseOut(): void{
    this.elm.nativeElement.style = 'none';
  }

  private applyStyle(): void{
    switch (this.decoration){
      case 'underline':
        this.elm.nativeElement.style.textDecoration = this.decoration;
        break;
      case 'bold':
        this.elm.nativeElement.style.fontWeight = this.decoration;
        break;
      default:
        break;
    }
  }
}
