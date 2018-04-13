import { Show } from '../core/model/show';
import { PagedList } from '../core/model/pagedList';
import { QueryData } from '../core/model/queryData';

export interface AppState {
    shows: Show[];
    pagedShows: PagedList<Show>;
    showDetail: Show;
    searchValue: string;
    showsQueryData: QueryData;
}