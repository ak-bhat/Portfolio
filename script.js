function validate(){
    var name=document.getElementById("name")
    var mail=document.getElementById("mail")
    var place=document.getElementById("place")
    var mobile=document.getElementById("mobile")

    if(name.value==""){
        alert("Please Enter your Name")
        document.form1.name.focus()
        return false
    }
    if(mail.value==""){
        alert("Please Enter your Email")
        document.form1.mail.focus()
        return false
    }
    if(place.value==""){
        alert("Please Enter your Place")
        document.form1.place.focus()
        return false
    }
    if(mobile.value==""){
        alert("Please Enter your Mobile no.")
        document.form1.mobile.focus()
        return false
    }
    return true


}
