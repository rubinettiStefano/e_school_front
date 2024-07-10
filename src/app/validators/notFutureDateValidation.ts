import { AbstractControl, ValidatorFn } from "@angular/forms";

export function notFutureDateValidation(): ValidatorFn{
        //ignora riga 3 e 5, sono sempre uguali Map<String,QualsiasiCosa>
        return (control:AbstractControl):{[key:string]:any} | null =>
        {
            let myDate = new Date(control.value);//il valore della form
            let today = new Date();//data di oggi

            if(today>myDate)
                return null;//no errore, va tutto bene
            else
                return { dateNotValid: {value:control.value}}; //restituisce un oggetto con nome dell'errore + valore errato
        }
}

