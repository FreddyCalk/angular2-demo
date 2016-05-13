export class User {

   constructor(
       public  Id: number,
       public  FirstName: string,
       public  LastName: string,
       public  Email: string,
       public  Password: string,
       public  PasswordConfirm: string,
       public  Address1?: string,
       public  Address2?: string,
       public  City?: string,
       public  State?: string,
       public  Zip?: string
   ){}

   public static Empty : User = new User(1, '', '', '','','');
}