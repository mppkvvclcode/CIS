import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
authenticate(email: string, password: string)
{

  console.log('before'+ this.isUserLoggedIn());

  if(email==="amit"&& password==='Amit'){

    console.log('after'+ this.isUserLoggedIn());
    sessionStorage.setItem('authenticateUser',email);

    return true;

  }

return false;
}

isUserLoggedIn(){

  let user=sessionStorage.getItem('authenticateUser');
  return !(user===null)

}

logout()
{
sessionStorage.removeItem('authenticateUser')
}

}
