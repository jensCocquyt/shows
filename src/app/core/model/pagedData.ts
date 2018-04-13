export class PagedData<T> {
    public page: number;
    public totalPages: number;
    public totalResults: number;
    public results: T[];
}