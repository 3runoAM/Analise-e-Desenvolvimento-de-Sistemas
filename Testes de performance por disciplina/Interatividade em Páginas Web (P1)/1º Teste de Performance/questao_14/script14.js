const link = document.getElementById("link");
const correctLink = "https://www.infnet.edu.br/infnet/instituto/";

if(link.href !== correctLink){
    link.href = correctLink;
}