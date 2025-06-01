using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TestePerformance2.Pages
{
    public class ListNotesModel : PageModel
    {
        public List<Note> Notes { get; set; } = new List<Note>();
        public void OnGet()
        {
            var filesDir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "files");
            if (!Directory.Exists(filesDir)) Directory.CreateDirectory(filesDir);

            foreach (var file in Directory.GetFiles(filesDir))
            {

                Note note = new Note();
                string fileName = Path.GetFileName(file);
                note.Content = System.IO.File.ReadAllText(file);
                note.DownloadLink = $"/files/{fileName}";

                Notes.Add(note);
            }
        }


        public class Note
        {
            public string Content { get; set; }
            public string DownloadLink { get; set; }
        }
    }
}