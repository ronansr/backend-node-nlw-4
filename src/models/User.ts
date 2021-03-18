import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;
    //se o nome do atributo na classe for diferente do banco, é passado por parametro @Column("nomeCampo")
    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User };