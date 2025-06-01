using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages
{
    public class SaveNotesModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }

        public string DownloadLink { get; set; }
        public bool FileSaved { get; set; }
       
        public void OnGet()
        {
            Input = new InputModel();
            FileSaved = false;
            DownloadLink = string.Empty;
        }

        public void OnPost()
        {
            if (ModelState.IsValid)
            {
                var filesDir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files");
                if (!Directory.Exists(filesDir)) Directory.CreateDirectory(filesDir);

                var fileName = $"note-{DateTime.Now.ToString("ddMMyyyyHHmm")}.txt";
                var filePath = Path.Combine(filesDir, fileName);

                using (var writer = new StreamWriter(filePath))
                {
                    writer.WriteLine(Input.Content);
                }

                FileSaved = true;
                DownloadLink = $"/files/{fileName}";
            }
        }

        public class InputModel
        {
            [Required(ErrorMessage = "O conteúdo da nota é obrigatório")]
            public string Content { get; set; }
        }
    }
}
