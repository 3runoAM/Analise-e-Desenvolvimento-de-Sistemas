using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TP1.Pages;

public class EventModel : PageModel{
    
    public Action<EventModel>LogEventToConsole = model => Console.WriteLine($"Event: {model.Title}, Date: {model.Date}, Location: {model.EventLocation}");
    
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string EventLocation { get; set; }
    
    public void OnGet(){
        
    }
    
    public void OnPost(string title, DateTime date, string eventLocation){
        EventModel eventModel = new EventModel();
        eventModel.Title = title;
        eventModel.Date = date;
        eventModel.EventLocation = eventLocation;
        
        LogEventToConsole(eventModel);
    }
}