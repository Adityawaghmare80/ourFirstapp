import { Component, OnInit } from '@angular/core';
import { Icity } from '../modules/interface';

@Component({
  selector: 'app-tabngfor',
  templateUrl: './tabngfor.component.html',
  styleUrls: ['./tabngfor.component.scss']
})
export class TabngforComponent implements OnInit {

  selectedCity: string = 'Paris';

  citiesArr: Array<Icity> = [
    {
      citititle: 'Paris',
      cityimg: 'https://media.cntraveller.com/photos/653783ab9da3a22eb97452f9/16:9/w_2240,c_limit/Cheapest_time_to_go_to_Paris_October23_Getty_Images.jpg',
      citycontent: '<p><strong>Paris :- </strong>Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.</p>'
    },
    {
      citititle: 'Italy',
      cityimg: 'https://wallpapercave.com/wp/wp2084843.jpg',
      citycontent: '<p><strong>Italy :- </strong>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelos "David" and Brunelleschis Duomo; Venice, the city of canals; and Milan, Italys fashion capital.</p>'
    },
    {
      citititle: 'Spain',
      cityimg: 'https://wallpapercave.com/wp/wp12400802.jpg',
      citycontent: '<p><strong>Spain :- </strong>Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.</p>'
    },
    {
      citititle: 'Berlin',
      cityimg: 'https://wallpapercave.com/wp/wp12400988.jpg',
      citycontent: '<p><strong>Berlin :- </strong>Berlin, Germany’s capital, dates to the 13th century. Reminders of the citys turbulent 20th-century history include its Holocaust memorial and the Berlin Walls graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The citys also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.</p>'
    },
    {
      citititle: 'Bankok',
      cityimg: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRIjxSd_gU_LSMJlpR1Jvr_Yp5b8yXoVl_i-HJYZOWYW7zkamx9UnyL2t7oMSrs1_wSKmojBdGTHXEldKZ92Rj59TZ2G1EKyN_1IULbrw',
      citycontent: '<p><strong>Bankok :- </strong>Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.</p>'
    },
    {
      citititle: 'Switzerland',
      cityimg: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRtLwYkAjf-7jQPvAkeqUhu8lB-rtHFQgAfPhZuTnTEmaeLseSJY5VXqtkztbbKiFX6IIqPqk0TvDR4-xyV-9iT6AoujslcsaucrAdN3g',
      citycontent: '<p><strong>Switzerland :- </strong>Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.</p>'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
