function validateForm()
{
    //name validation
    let name = document.forms["contact-form"]["name"].value;
    if(name == "")
    {
        alert("Enter name please");
        return false;
    }

    //email validation
    let email = document.forms["contact-form"]["email"].value;
    if(email == "")
    {
        alert("Enter Email please");
        return false;
    }

    //subject validation
    let subject = document.forms["contact-form"]["subject"].value;
    if(subject == "")
    {
        alert("Enter Subject please");
        return false;
    }

    //message validation
    let textarea = document.forms["contact-form"]["textarea"].value;
    if(textarea == "")
    {
        alert("Enter message please");
        return false;
    }
}