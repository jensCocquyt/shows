export class PagedList<T> {
    items: T[];
    totalPages: number;
    totalItems: number;
    page: number;
}