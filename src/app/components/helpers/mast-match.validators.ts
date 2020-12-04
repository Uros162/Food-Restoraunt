import { FormGroup } from '@angular/forms';


export function MastMatch(password:string,repeatPassword:string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[password];
        const controlRepeat = formGroup.controls[repeatPassword];

        if(controlRepeat.errors && !controlRepeat.errors.mustMatch){
            return;
        }

        if(control.value !== controlRepeat.value){
            controlRepeat.setErrors({mustMatch:true});
        }else{
            controlRepeat.setErrors(null);
        }
    }
}