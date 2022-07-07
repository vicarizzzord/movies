import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Category } from "./Category";

@Entity("videos")
export class Video {
    @PrimaryGeneratedColumn() 
    id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @ManyToOne( () => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;


    @CreateDateColumn()
    created_at: Date;

}