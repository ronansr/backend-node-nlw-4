import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id"})
    user: User
    //se o nome do atributo na classe for diferente do banco, é passado por parametro @Column("nomeCampo")
    @Column()
    survey_id: string;
    
    @ManyToOne(() => Survey)
    @JoinColumn({ name: "survey_id"})
    survey: Survey

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { SurveyUser };