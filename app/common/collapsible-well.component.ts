import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'colapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string
  visible: boolean = true
  constructor() { }

  ngOnInit() { }

  toggleContent() {
    this.visible = !this.visible
  }
}