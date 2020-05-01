var login = document.getElementById('myForm').login;
var pw = document.getElementById('myForm').pw;
var potwierdzHaslo = document.getElementById('myForm').potwierdzHaslo;
var email = document.getElementById('myForm').email;
var telefon = document.getElementById('myForm').telefon;
var miejscowosc = document.getElementById('myForm').miejscowosc;
var kodPocztowy = document.getElementById('myForm').kodPocztowy;
var info2 = document.getElementById('info2');
var info3 = document.getElementById('info3');
var info4 = document.getElementById('info4');
var info5 = document.getElementById('info5');
var info7 = document.getElementById('info7');
var submitBtn = document.getElementById('myForm').submitBtn;



login.value = "Login";
pw.setAttribute('type','text');
pw.value = "Hasło";
potwierdzHaslo.setAttribute('type','text');
potwierdzHaslo.value = "Potwierdź hasło";
email.value = "Email";
telefon.value = "Numer telefonu";
miejscowosc.value = "Miejscowość";
kodPocztowy.value = "Kod pocztowy" ;

login.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Login";   
    }
   
};

login.onfocus = function()
{
    this.setAttribute('class','active')
    if(this.value == "Login")
    {
        this.value = "";
    }
};

pw.onfocus = function()
{
    this.setAttribute('class','active');
    this.setAttribute('type','password');
    if(this.value == "Hasło")
    {
        this.value = "";
    }
    //Sprawdzenie hasła
    var wzor = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/g;
    var self = this.value;
    var sprawdzenie = wzor.test(self);
    if(!sprawdzenie)
    {
        info2.innerText = "7 znaków [A-Z][a-z][0-9]";
    }
    else
    {
        info2.innerText = "";
    }
    
};

pw.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Hasło";
        this.setAttribute('type','text'); 
          
    }
    //Sprawdzenie hasła
    var wzor = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}/g;
    var self = this.value;
    var sprawdzenie = wzor.test(self);
    if(!sprawdzenie)
    {
        info2.innerText = "7 znaków [A-Z][a-z][0-9]";
    }
    else
    {
        info2.innerText = "";
    }
};

potwierdzHaslo.onfocus = function()
{
    this.setAttribute('class','active');
    this.setAttribute('type','password');
    if(this.value == "Potwierdź hasło")
    {
        this.value = "";
    }
    if(pw.value !== this.value)
    {
        info3.innerText = "Hasło niepoprawne"
    }
    else
    {
        info3.innerText = "";
    }
};

potwierdzHaslo.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Potwierdź hasło";
        this.setAttribute('type','text');   
    }
    if(pw.value !== this.value)
    {
        info3.innerText = "Hasło niepoprawne"
    }
    else
    {
        info3.innerText = "";
    }
   
};

email.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Email";   
    }
    //Sprawdzenie poprawności formatu
    var self = this.value;
    var wzor = /[a-z]*[A-Z]*[0-9]*.{2,}@[a-z]*[A-Z]*.{2,}(?=\.pl|\.com)/; //|(?=\.com)/;
    var sprawdzenie = wzor.test(self);
    if(!sprawdzenie)
    {
        info4.innerText = "Niepoprawny email"
    }
    else
    {
        info4.innerText = "";
    }
    
   
};

email.onfocus = function()
{
    this.setAttribute('class','active')
    if(this.value == "Email")
    {
        this.value = "";
    }
    if(!sprawdzenie)
    {
        info4.innerText = "Niepoprawny email"
    }
    else
    {
        info4.innerText = "";
    }
};

telefon.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Numer telefonu";   
    }
    var self = this.value;
    var wzor = /^\d{9}$/;
    var sprawdzenie = wzor.test(self);
    if(!sprawdzenie)
    {
        info5.innerText = "Numer niepoprawny";
    }
    else
    {
        info5.innerText = "";
    }
   
};

telefon.onfocus = function()
{
    this.setAttribute('class','active')
    if(this.value == "Numer telefonu")
    {
        this.value = "";
    }
    if(!sprawdzenie)
    {
        info5.innerText = "Numer niepoprawny";
    }
    else
    {
        info5.innerText = "";
    }
};

miejscowosc.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Miejscowość";   
    }
   
};

miejscowosc.onfocus = function()
{
    this.setAttribute('class','active')
    if(this.value == "Miejscowość")
    {
        this.value = "";
    }
};

kodPocztowy.onblur = function()
{
    this.setAttribute('class','inactive');
    if(this.value == "")
    {
        this.value = "Kod pocztowy";   
    }
    var self = this.value;
    var wzor = /^\d{2}-\d{3}$/;
    var sprawdzenie = wzor.test(self);
    if(!sprawdzenie)
    {
        info7.innerText = "Błędny kod";
    }
    else
    {
        info7.innerText = "";
    }
   
};

kodPocztowy.onfocus = function()
{
    this.setAttribute('class','active')
    if(this.value == "Kod pocztowy")
    {
        this.value = "";
    }
    
};



