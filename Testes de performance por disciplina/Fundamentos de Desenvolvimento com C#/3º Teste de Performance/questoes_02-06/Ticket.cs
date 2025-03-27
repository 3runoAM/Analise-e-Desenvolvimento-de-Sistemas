namespace TesteDePerformance3.questoes_02_06;

public class Ticket{
    public string eventName;
    public double price;
    public int availableQuantity;

    public Ticket(){}
    
    public Ticket(string? eventName, double price, int availableQuantity){
        this.eventName = eventName;
        this.price = price;
        this.availableQuantity = availableQuantity;
    }
    
    public string? GetEventName(){
        return eventName;
    }
    
    public double GetPrice(){
        return price;
    }
    
    public int GetAvailableQuantity(){
        return availableQuantity;
    }

    public void SetEventName(string? newName){
        this.eventName = newName;
    }
    
    public void SetPrice(double newPrice){
        this.price = newPrice;
    }
    
    public void SetAvailableQuantity(int newQuantity){
        this.availableQuantity = newQuantity;
    }
    
    /**/

    public void UpdatePrice(double newPrice){
        this.price = newPrice;
    }

    public void UpdateAvailableQuantity(int newQuantity){
        this.availableQuantity = newQuantity;
    }

    public string GetEventInfo(){
        return $"Evento: {eventName}\n\tPreço: R${price}\n\tQuantidade disponível: {availableQuantity}\n";
    }
}