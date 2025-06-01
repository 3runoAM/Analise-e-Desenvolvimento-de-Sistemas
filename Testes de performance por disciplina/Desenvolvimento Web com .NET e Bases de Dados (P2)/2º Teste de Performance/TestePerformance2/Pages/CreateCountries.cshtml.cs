using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages
{
    public class CreateCountriesModel : PageModel
    {
        [BindProperty]
        public List<InputModel> Input { get; set; }
        public void OnGet()
        {
            Input = new List<InputModel>{
               new InputModel(), 
               new InputModel(),
               new InputModel(),
               new InputModel(),
               new InputModel()  
            };
        }

        public void OnPost()
        {
            if (ModelState.IsValid)
            {
                for (int i = 0; i < 5; i++)
                {
                    Console.WriteLine(i);
                    Console.WriteLine(Input[i].Country);
                }
            }
        }

        public class InputModel
        {
            [Required(ErrorMessage = "As inforamções do país não podem ficar vazias")]
            public Country Country { get; set; }
        }
    }
}
