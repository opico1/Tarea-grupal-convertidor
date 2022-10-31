let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const price = document.getElementById("valorBTN")

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    price.innerHTML = stockObject.p;
    let numeroBTN = parseFloat(stockObject.p);
    //console.log(numeroBTN)
    //console.log(stockObject.p);
}

function convertirBTN() {
    
    //let stockObject = JSON.parse(event.data);
    //let numeroBTN = parseFloat(stockObject.p);
    let bitcoin; 
    let dolares;
    let resultado = 0;


    dolares = parseFloat(document.getElementById("dolares"). value);

    resultado = dolares / bitcoin; 

    document.getElementById("resultBTN").innerText = resultado;

}
