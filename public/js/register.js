//console.log("register");

document.getElementById("role-input").addEventListener("change", function (event) {
    if(event.target.value === "owner"){
        document.getElementById("org_label").classList.remove("hidden");
        document.getElementById("org_input").classList.remove("hidden")
    } else if (event.target.value === "user")
    {
        document.getElementById("org_label").classList.add("hidden");
        document.getElementById("org_input").classList.add("hidden")
    }
  });