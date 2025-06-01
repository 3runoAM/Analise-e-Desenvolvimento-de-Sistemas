using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages.CityManager
{
    public class CreateCityModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }
        public void OnGet()
        {
            Input = new InputModel();
        }

        public void OnPost(string CityName)
        {
            if(ModelState.IsValid)
            {
                Input.CityName = CityName;
            }
        }

        public class InputModel
        {
            [Required(ErrorMessage = "O nome da cidade é obrigatório")]
            [MinLength(3, ErrorMessage = "O nome da cidade precisa ter no mínimo 3 caracteres")]
            public string CityName { get; set; }
        }
    }
}