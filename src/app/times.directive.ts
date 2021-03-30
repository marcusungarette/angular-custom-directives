import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef, // Reference to element <ul>
    private templateRef: TemplateRef<any> // Reference to element <li>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
