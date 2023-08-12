class Dados{
    constructor(jquery, apiUrl, loader, notificacao){
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    buscar(){
        var token = localStorage.getItem("token");
        var notificacao = this.notificacao;
        var loader = this.loader;
        
        (this.jquery).get((this.apiUrl)+"/Corrida/corridas.php",{token:token}).done(function(dados){
            localStorage.setItem("corridas",dados);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Rentacar/alugueres.php",{token:token}).done(function(dados){
            localStorage.setItem("alugueres",dados);  
        }).always(function(always){
            
        });
        
        (this.jquery).get((this.apiUrl)+"/Rentacar/carros.php",{token:token}).done(function(dados){
            localStorage.setItem("carros",dados);  
        }).always(function(always){
            
        });
    }

    
    
}

