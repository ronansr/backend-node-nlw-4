import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("surveys")
class Survey {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    title: string;
    //se o nome do atributo na classe for diferente do banco, é passado por parametro @Column("nomeCampo")
    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Survey };