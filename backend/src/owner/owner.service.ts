import {db} from "../utils/db.server";
type Owner = {
    id: number;
    firstName: string;
    lastName: string;
    midtName: string;
    idNumber: number;
    email:string;
};

export   const listOwner= async (): Promise<Owner[]>=>{
    return db.owner.findMany({
        select:{
          id:true,
          firstName:true,
          lastName:true,
          midtName:true,
          idNumber:true,
          email:true,
        },
    });
}

export   const getOwner= async (id:number): Promise<Owner | null>=>{
    return db.owner.findUnique({
        where:{
          id,  
        },
        
    });
}


export const creatOwner = async(owner: Omit<Owner,"id">): Promise<Owner> =>{
const {firstName , lastName ,midtName,idNumber,email } = owner;
return db.owner.create({
    data: {
    firstName,
    lastName,
    midtName,
    idNumber,
    email,
    },
    select: {
        id: true,
        firstName: true,
        lastName: true,
        midtName: true,
        idNumber: true,
        email: true,
      },
});
};

export const updateOwner = async(owner: Omit<Owner,"id">, id:number):Promise<Owner> =>{
    const {firstName , lastName ,midtName,idNumber,email } = owner;
    return db.owner.update({
        where: {
        id,
        },
       data:{
         firstName ,
         lastName,
         midtName,
         idNumber,
         email
       } 
    });
}