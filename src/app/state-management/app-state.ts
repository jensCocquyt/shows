import { Show } from "../core/model/show";

export interface AppState {
    shows: Show[];
    showDetail: Show;
    searchValue:string;
}