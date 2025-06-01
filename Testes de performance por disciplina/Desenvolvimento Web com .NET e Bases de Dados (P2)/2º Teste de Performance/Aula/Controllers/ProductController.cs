using Aula.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Aula.Controllers
{
    public class ProductController : Controller
    {
        
        public ActionResult Index()
        {
            var produtos = GetProducts();
            return View(produtos);
        }


        private List<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product { Id = 1, Description = "Produto 1", Price = 10.00m },
                new Product { Id = 2, Description = "Produto 2", Price = 20.00m },
                new Product { Id = 3, Description = "Produto 3", Price = 30.00m }
            };
        }


    }
}
