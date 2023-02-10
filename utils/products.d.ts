export namespace Llamito { 
    export interface Products { 
        name:string; 
        quantity:number;
        restockDate:Date;
        priority:Boolean;
    }
    export interface ServiceProvider{
        name: "Tiktok"| "Line" | "Shoppe" | "Lazada";
        userName: string; 
        passWord:string;  
    }
}