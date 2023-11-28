function regDet(){
    let person={
        user:uname.value,
        mail:email.value,
        pass:pswd.value
    }
    if(person.user==''||person.mail==''||person.pass==''){
        alert('please enter details')
        window.location='./index.html'
    }else{
        if(person.mail in localStorage){
            alert('User already registered')
            window.location='./login.html'
        }else{
           console.log(localStorage.setItem(person.user,JSON.stringify(person))); 
            alert('Registered successfully')
            window.location='./login.html'
        }
    }
    
    
    }


function logDet(){
    user=uname.value
    pass=pswd.value

    if(user in localStorage){
        details=JSON.parse(localStorage.getItem(user))//object
        console.log(details);
        if(pass==details.pass){
            alert('Login successful')
            window.location='./budget.html'
        }else{
            alert('Invalid password')
        }
    }else{
        alert('Please register')
     }
    
}


function budgetCal(){
    // let data={
        Monthly=income.value
        Rent=rent.value
        Food=food.value
        Utilities=utilities.value
        Insurance=insurance.value
    // }

    result=Monthly-Rent-Food-Utilities-Insurance;
    savings=(Monthly*0.20)
    if(result===0){
        alert('You didnt enter anything,try again')
    }else if(result<0){

        results.innerHTML=`
        <p>After your expenses you have ${result} left in your budget.You might want to try and reduce your spending this month</p>

        `
        emoji.innerHTML=`
        <i class="fa-solid fa-face-sad-tear fa-beat" style="color: #d6c50a;"></i>
        `
    }else{
        results.innerHTML=`
        <p>After your expenses you have ${result} left in your budget.But you should save at least ${savings}</p>

        `
        emoji.innerHTML=`
        <i class="fa-solid fa-face-smile-beam fa-beat" style="color: #bca510;"></i>
        `
    }

}


function logOut(){
    localStorage.clear()
    window.location='./index.html'
}