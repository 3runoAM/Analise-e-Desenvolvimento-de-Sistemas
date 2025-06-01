using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TP1.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public Product NewProduct { get; set; }

        public static List<Product> Products = new List<Product>{
            new Product{ Name = "Mouse Warrior", Price = 150.0 },
            new Product{ Name = "Teclado Mec�nico", Price = 99.90 },
            new Product{ Name = "Monitor ASUS", Price = 300.0 }
        };

        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            
        }

        
        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                Products.Add(new Product {
                    Name = NewProduct.Name,
                    Price = NewProduct.Price
                }); 
                return RedirectToPage();
            }
            else
            {
                return Page();
            }
        }
    }
}

public class Product
{
    public string Name { get; set; }
    public double Price { get; set; }
}