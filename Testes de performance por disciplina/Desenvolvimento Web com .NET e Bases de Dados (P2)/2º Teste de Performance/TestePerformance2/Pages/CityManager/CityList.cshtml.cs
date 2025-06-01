using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages.CityManager
{
    public class CityListModel : PageModel
    {
        public List<string> Cities { get; set; }
        public void OnGet()
        {
            Cities = ["Rio", "São Paulo", "Brasília"];
        }
    }
}
