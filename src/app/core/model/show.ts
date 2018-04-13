import { Comment } from './comment';
export class Show {
    public id: number;
    public name: string;
    public description: string;
    public rating: number;
    public comments?: Comment[];
}