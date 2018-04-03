import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const projects=[
            {id: 1, projectName:'Project 001', imageUrl:'./assets/image/cate/image1.jpg'},            
            {id: 1, projectName:'Project 002', imageUrl:'./assets/image/cate/image2.jpg'},
            {id: 1, projectName:'Project 003', imageUrl:'./assets/image/cate/image1.jpg'},
            {id: 1, projectName:'Project 004', imageUrl:'./assets/image/cate/image1.jpg'},
            {id: 1, projectName:'Project 005', imageUrl:'./assets/image/cate/image2.jpg'},

        ];
        return {projects};
    }
}