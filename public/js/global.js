
const roleInput = document.getElementById("role-input")
if(roleInput !== null){

    roleInput.addEventListener("change", function (event) {
        // Verifica el valor seleccionado en el input de roles
        if(event.target.value === "owner"){
            // Mostrar elementos relacionados con el rol de "owner"
            document.getElementById("org_label").classList.remove("hidden");
            document.getElementById("org_input").classList.remove("hidden")
        } else if (event.target.value === "user")
        {
            // Ocultar elementos relacionados con el rol de "user"
            document.getElementById("org_label").classList.add("hidden");
            document.getElementById("org_input").classList.add("hidden")
        }
      }
    );
}

const links = document.querySelectorAll('.join');
if(links !== null){
    
    //console.log("hello");
    links.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();
        // Obtener IDs de usuario y proyecto de los atributos de datos del enlace
        const projectId = event.target.getAttribute("data-project-id");
        const userId = event.target.getAttribute("data-user-id")
        console.log(event.target.getAttribute("data-project"));
        // Realizar una solicitud POST para suscribir al usuario al proyecto
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
            // Mostrar mensaje de éxito si la solicitud tiene éxito
            const messageContainer = document.getElementsByClassName("flash-message")[0];
            messageContainer.classList.add("success");
            messageContainer.classList.remove("hidden");
            messageContainer.innerHTML = "Thank you! You have been subscribed to the project";
        })
        .catch (error => {
            // Mostrar mensaje de error si la solicitud falla
            const messageContainer = document.getElementsByClassName("flash-message")[0];
            messageContainer.classList.add("error");
            messageContainer.classList.remove("hidden");
            messageContainer.innerHTML = "You can't subscribe to the project again";
        })
        
        
    }));
};


  