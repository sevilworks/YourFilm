import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  nomFilm :string='' ;
  descFilm :string='';
  constructor(private filmsService : FilmsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']-1;
    this.nomFilm= this.filmsService.getFilmbyid(+id).nom+this.nomFilm;
    this.descFilm =this.filmsService.getFilmbyid(+id).description+this.descFilm;
  }
  update(desc: string,name: string){
    const id = +this.route.snapshot.params['id']-1;
    this.filmsService.updatefilmbyid(id,desc,name);
    this.router.navigate(['admin/liste-films']);

  }
}
