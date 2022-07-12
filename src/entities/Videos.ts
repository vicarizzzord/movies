import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video {
    @PrimaryGeneratedColumn("uuid", {
        name: 'id',
    }) 
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