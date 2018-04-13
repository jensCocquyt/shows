import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Show } from '../model/show';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { QueryData } from '../model/queryData';
import { PagedList } from '../model/pagedList';


@Injectable()
export class ShowsService {

  constructor(private httpClient: HttpClient) {
  }

  public searchPaged(queryData: QueryData) {
    if (queryData.searchValue) {
      return this.fetchData(`https://api.themoviedb.org/3/` +
        `search/tv?api_key=16c887c508decabbbb79db65a20b2d09&language=en-US&query=${queryData.searchValue}&page=${queryData.page}`);
    } else {
      return this.fetchData(`https://api.themoviedb.org/3/discover/tv` +
        `?api_key=16c887c508decabbbb79db65a20b2d09&language=en-US&sort_by=popularity.desc&page=${queryData.page}`);
    }
  }

  public getById(id: number): Observable<Show> {
    return forkJoin([this.getShowById(id), this.getCommentsById(id)])
      .pipe(
        map(([show, resultComments]: [ResultShow, ResultComment[]]) => ({
          name: show.name,
          description: show.overview,
          rating: show.vote_average,
          id: show.id,
          comments: resultComments.
            map(c => ({
              subject: c.Subject,
              message: c.Message,
              showId: c.ShowId,
              createdOn: c.CreatedOn
            }))
        })
        )
      );
  }

  public getShowById(id: number) {
    return this.httpClient
      .get<ResultShow>(`https://api.themoviedb.org/3/tv/${id}?` +
        `api_key=16c887c508decabbbb79db65a20b2d09&language=en-US`);
  }

  public getCommentsById(id: number) {
    return this.httpClient.get<Comment>(`http://localhost:51455/api/comments/${id}`);
  }

  public saveComment(comment: Comment) {
    return this.httpClient.post<ResultComment>(`http://localhost:51455/api/comments`, comment).pipe(
      map(c => ({ subject: c.Subject, message: c.Message, showId: c.ShowId, createdOn: c.CreatedOn }))
    );
  }

  private fetchData(url: string) {
    return this.httpClient
      .get<ResultSet<ResultShow>>(url)
      .pipe(map(d => {
        return {
          totalItems: d.total_results,
          items: d.results.map(r => ({
            name: r.name,
            description: r.overview,
            rating: r.vote_average,
            id: r.id
          }))
        };
      }));
  }



}

export class ResultSet<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

export class ResultShow {
  name: string;
  overview: string;
  vote_average: number;
  id: number;
}

export class ResultComment {
  public Subject: string;
  public Message: string;
  public ShowId: string;
  public CreatedOn: Date;
}
