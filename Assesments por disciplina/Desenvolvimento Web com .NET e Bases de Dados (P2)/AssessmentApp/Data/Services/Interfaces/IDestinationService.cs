using AssessmentApp.Models;

namespace AssessmentApp.Data.Services.Interfaces;

public interface IDestinationService{
    void AddDestination(Destination destination);
    List<Destination> GetAllDestinations();
    Destination GetDestinationById(int id);

    void DeleteDestinationByIdAsync(int id);
}