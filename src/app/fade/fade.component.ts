import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
 
@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.scss']
})
export class FadeComponent implements OnInit {

  currentSection: any;

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray("section");

    this.currentSection = sections[0];

    gsap.set("body", { height: (sections.length * 100) + "vh"});

    sections.forEach((section: any, i) => {
      section.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
 
      gsap.to(section, {scrollTrigger : {
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,

        onToggle: self => self.isActive && this.currentSection(section)
        }
      });
    });
  }



}
