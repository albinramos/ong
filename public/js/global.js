
const roleInput = document.getElementById("role-input")
if(roleInput !== null){

    roleInput.addEventListener("change", function (event) {
        if(event.target.value === "owner"){
            document.getElementById("org_label").classList.remove("hidden");
            document.getElementById("org_input").classList.remove("hidden")
        } else if (event.target.value === "user")
        {
            document.getElementById("org_label").classList.add("hidden");
            document.getElementById("org_input").classList.add("hidden")
        }
      }
    );
}



const links = document.querySelectorAll('.join');
if(links !== null){
    
    console.log("hello");
    links.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();
        const projectId = event.target.getAttribute("data-project-id");
        const userId = event.target.getAttribute("data-user-id")
        console.log(event.target.getAttribute("data-project"));
        fetch("http://localhost:3312/users_has_projects/create", 
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ users_id: parseInt(userId), projects_id: parseInt(projectId) })
            }
        )
        .then (data => {
            const messageContainer = document.getElementsByClassName("flash-message")[0];
            messageContainer.classList.add("success");
            messageContainer.classList.remove("hidden");
            messageContainer.innerHTML = "You have been susbribed to the project";
        })
        .catch (error => {
            const messageContainer = document.getElementsByClassName("flash-message")[0];
            messageContainer.classList.add("error");
            messageContainer.classList.remove("hidden");
            messageContainer.innerHTML = "Can not subscribe to this project";
        })
        
        
    }));
};


  