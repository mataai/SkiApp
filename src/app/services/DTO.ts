export class Student{

    id;
    Name;
    Status;
    Other;
}

export class Groupe{

    id;
    Number;
    Level;
    Time;
    TeacherName;
    day;
    Students: Student[];

}

export class LoginRequest{

    code: number;
    ip: string;

    public LoginRequest(code:number){
        this.code = code;
    }

}


export class LoginResponse {

    employe;
    token;

    public LoginResponse(Employe,Token){
        this.employe = Employe;
        this.token = Token;
    }

}

export class Employe {
    id;
    name;
    permissions;

    public Employe(id, Name){
        this.name = Name;
        this.id = id;
    }
}
