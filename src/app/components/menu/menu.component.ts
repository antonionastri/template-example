import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  activeCategory: string = '';
  
  ngOnInit(){
    this.activeCategory = 'caffe';
  }

  showCategory(categoryId: string) {
    this.activeCategory = categoryId;
  }
}
