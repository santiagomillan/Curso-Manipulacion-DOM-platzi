/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
/* 
    En esta clase agregaremos estilos a nuestros nodos
    desde javascript */
    const baseUrl = "https://platzi-avo.vercel.app";
    const appNode = document.querySelector('#app');
    
    
     const formatPrice = price => {
    
        const newPrice = new window.Intl.NumberFormat("es-EN", {
            style: "currency",
            currency: "USD"
        }).format(price) //como ya inicialice la api le voy a decir a la api
                        //que le voy a dar formato al precio que he recibido
    
        return newPrice;
     }
    
    window
        .fetch(`${baseUrl}/api/avo`)
        .then(respuesta => respuesta.json())
        .then(responseJson =>{
    
            const todosLosItems = [];
            responseJson.data.forEach(item => {
            
            const imagen = document.createElement('img');
          
            imagen.src = `${baseUrl}${item.image}`;
    
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            
        
            const titulo = document.createElement('h2');
    
            titulo.className = "text-lg";
            
            titulo.textContent = item.name;
    
           
    

    
           
            const precio = document.createElement('div');
    
            precio.className = "text-gray-600";
    
            precio.textContent = formatPrice(item.price);
    
    
             // Creamos un contenedor el título y el precio
             const priceAndTitle = document.createElement("div")
             priceAndTitle.className = "text-center md:text-left";
             priceAndTitle.appendChild(titulo);
             priceAndTitle.appendChild(precio);
    
            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);
    
            
            // Metemos todo dentro del contenedor principal
    
            const container = document.createElement('div');
            container.appendChild(card);
    
    
         
         
                todosLosItems.push(container);
                
            
                    
                });
                appNode.className = 'mt-10 grid grid-cols-2 gap2'
                appNode.append(...todosLosItems)
        
            });