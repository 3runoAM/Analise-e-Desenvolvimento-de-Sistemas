using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages
{
    public class CreateCountryModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();
        public void OnGet()
        {
            Input = new InputModel();
        }

        public void OnPost()
        {
            if (ModelState.IsValid)
            {
                if (char.ToLower(Input.Name[0]) != char.ToLower(Input.Code[0]))
                {
                    ModelState.AddModelError("Input.CountryCode", "O nome do país e o código devem começar com a mesma letra");
                }
                Country country = new Country();
                country.Name = Input.Name;
                country.Code = Input.Code;
            }
        }

        public class InputModel
        {
            [Required(ErrorMessage = "O nome do país é obrigatório")]
            public string Name { get; set; }


            [Required(ErrorMessage = "O código do país é obrigatório")]
            [StringLength(2, ErrorMessage = "O código do país deve ter no máximo duas letras")]
            public string Code { get; set; }
        }
    }
}
