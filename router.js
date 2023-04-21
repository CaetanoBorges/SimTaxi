const route = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
};

const vaiTela = (route) =>{
    window.history.pushState({},"",route);
    handleLocation();
}

const prefixed = "SimTaxi/";
const routes = {
    404: "/pages/404.html",
    "/index.html": "/pages/home.html",
    "/": "/pages/home.html",
    "/about": "/pages/sobre.html",
    "/lorem": "/pages/lorem.html"
}

const handleLocation = async() => {
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=> data.text());
    document.querySelector("#main").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();