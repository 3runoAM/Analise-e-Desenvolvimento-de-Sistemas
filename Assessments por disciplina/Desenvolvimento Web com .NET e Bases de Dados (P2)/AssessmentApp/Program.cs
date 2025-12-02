using AssessmentApp.Data;
using AssessmentApp.Data.Services.Implementation;
using AssessmentApp.Data.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")))
    .AddScoped<IClientService, ClientService>()
    .AddScoped<IDestinationService, DestinationService>()
    .AddScoped<IReservationService, ReservationService>()
    .AddScoped<ITravelPackageService, TravelPackageService>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();
app.MapRazorPages()
    .WithStaticAssets();

app.Run();