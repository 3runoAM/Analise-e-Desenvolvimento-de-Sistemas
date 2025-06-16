using AssessmentApp.Models;

namespace AssessmentApp.Data.Services.Interfaces;

public interface ITravelPackageService{
    List<TravelPackage> GetAllAvailableTravelPackages();
    bool IsTravelPackageAvailableById(int travelPackageId);
    void AddTravelPackage(TravelPackage travelPackage);
    TravelPackage GetTravelPackageById(int id);
}