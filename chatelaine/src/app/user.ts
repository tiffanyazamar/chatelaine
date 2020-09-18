import { UserRole } from './user-role';

export class User {
    public userID:String;
    public password:String;
    public firstName:String;
    public lastName:String;
    public phoneNumber:String;
    public userRole:UserRole;
    public eventList:Array<Event>;

    constructor(userID:String, password:String, firstName:String, lastName:String, phoneNumber:String, userRole:UserRole, eventList:Array<Event>){
        this.userID=userID,
        this.password=password,
        this.firstName=firstName,
        this.lastName=lastName,
        this.phoneNumber=phoneNumber,
        this.userRole=userRole,
        this.eventList=eventList
    }
}
