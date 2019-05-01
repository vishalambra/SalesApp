import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {



    constructor() {

    }

    setlocalstorage(Token) {
        console.log(Token)
        // require('nativescript-localstorage'); 
        localStorage.setItem("LoggedInUser", Token)
        localStorage.setItem("accessToken", Token)
        console.log("heyyyy")
        console.log(localStorage)


    }
}