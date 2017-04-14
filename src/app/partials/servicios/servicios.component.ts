import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor() {
    $(document).ready(function() {
            $('body').removeClass('portfolio-img');
            $.backstretch('assets/img/servicios-background-image.jpg');
          });

   }

  ngOnInit() {
  }

}
