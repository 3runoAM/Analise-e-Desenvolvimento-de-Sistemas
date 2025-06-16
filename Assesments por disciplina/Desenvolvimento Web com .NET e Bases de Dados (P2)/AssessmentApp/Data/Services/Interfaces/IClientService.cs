using AssessmentApp.Models;

namespace AssessmentApp.Data.Services.Interfaces;

public interface IClientService
{
    Client GetClientByEmail(string email);
}