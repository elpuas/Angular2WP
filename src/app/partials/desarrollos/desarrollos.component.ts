import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-desarrollos',
  templateUrl: './desarrollos.component.html',
  styleUrls: ['./desarrollos.component.scss']
})
export class DesarrollosComponent implements OnInit {

  constructor() {

    $(document).ready(function() {
            $('body').removeClass('portfolio-img');
            $.backstretch('assets/img/desarrollos-background-image.jpg');
          });
        }
  ngOnInit() {
  }

}
