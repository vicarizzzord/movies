import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn() 
    id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

}