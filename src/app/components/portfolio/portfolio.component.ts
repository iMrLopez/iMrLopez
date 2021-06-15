import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project, ProjectCategory } from 'src/app/models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public projects: Array<Project>;
  public categories: Array<ProjectCategory>;
  public appliedFilters: Array<ProjectCategory> = new Array<ProjectCategory>();

  constructor(private http: HttpClient) {
    this.http.get('../../assets/data/portfolio/projects.json').toPromise().then((response: Project[]) => this.projects = response);
    this.http.get('../../assets/data/portfolio/categories.json').toPromise().then((response: ProjectCategory[]) => this.categories = response);
  }

  ngOnInit() {
  }

  toggleFilter($e: ProjectCategory){
    if($e.description === 'all') {
      this.appliedFilters = new Array<ProjectCategory>();
      return;
    }

    const foundIdx = this.appliedFilters.findIndex((el) => el == $e);
    if (foundIdx > -1) {
      this.appliedFilters.splice(foundIdx,1);
    } else {
      this.appliedFilters.push($e);
    }
    console.log(this.appliedFilters, $e)
  }

  shouldDisplayProject(proj: Project){
    if (this.appliedFilters.length === 0) {
      return true;
    }
    
    const found = this.appliedFilters.findIndex((el) => el.description == proj.type.description);
    return (found > -1);

  }

}
