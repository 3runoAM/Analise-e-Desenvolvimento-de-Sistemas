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
                    ModelState.AddModelError("Input.CountryCode", "O nome do pa�s e o c�digo devem come�ar com a mesma letra");
                }
                Country country = new Country();
                country.Name = Input.Name;
                country.Code = Input.Code;
            }
        }

        public class InputModel
        {
            [Required(ErrorMessage = "O nome do pa�s � obrigat�rio")]
            public string Name { get; set; }


            [Required(ErrorMessage = "O c�digo do pa�s � obrigat�rio")]
            [StringLength(2, ErrorMessage = "O c�digo do pa�s deve ter no m�ximo duas letras")]
            public string Code { get; set; }
        }
    }
}
