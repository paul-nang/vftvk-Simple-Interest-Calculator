
Skip to content
Pull requests
Issues
Marketplace
Explore
@paul-nang
mantolino /
vftvk-Simple-Interest-Calculator
Public
forked from ibm-developer-skills-network/vftvk-Simple-Interest-Calculator

Code
Pull requests
Actions
Projects
Wiki
Security

    Insights

vftvk-Simple-Interest-Calculator/script.js /
@mantolino
mantolino Visual changes
Latest commit b36f3dd 1 hour ago
History
2 contributors
@mantolino
@rameshsannareddy
35 lines (29 sloc) 1.38 KB
function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal == NaN || principal == "0" || principal == "" || parseFloat(principal) < 0)
    {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        return;
    }
    principal = parseFloat(principal);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //create variable for shorter reference
    var resultSpan = document.getElementById("result");

    //use toString to avoid errors and improve readability on types
    var newContent = "If you deposit \<span class='value'\>"+principal.toString()+"\</span\>,\<br\>";
    newContent += "at an interest rate of \<span class='value'\>"+rate.toString()+"%\</span\>.\<br\>";
    newContent += "You will receive an amount of \<span class='value'\>"+interest.toString()+"\</span\>,\<br\>";
    newContent += "in the year \<span class='value'\>"+year.toString()+"\</span\>";

    //first compute content; then assign content to HTML property
    resultSpan.innerHTML = newContent;

}
        

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

 
