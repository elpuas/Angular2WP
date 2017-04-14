import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() {
    $(document).ready(function() {
            $('body').removeClass('portfolio-img');
            $.backstretch('assets/img/contacto-background-image.jpg');
          });
   }

  ngOnInit() {
  }

}
