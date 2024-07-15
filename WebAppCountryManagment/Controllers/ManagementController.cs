using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppCountryManagment.Models;
namespace WebAppCountryManagment.Controllers
{
    public class ManagementController : Controller
    {
        // GET: Management
        public ActionResult Start()
        {
            return View();
        }

        public JsonResult CheckCountry()
        {
            BD_PaisesEntities connection = new BD_PaisesEntities();
            var command = connection.Pr_ConsultarPaises();
            return Json(new { Querry = command }, JsonRequestBehavior.AllowGet);
        }

        
        public JsonResult CountryInsertion(string country, string capital, long poblation)
        {
            BD_PaisesEntities connection = new BD_PaisesEntities();
            ObjectParameter result = new ObjectParameter("Resultado", typeof(int));
            var insertion = connection.pr_InsertarPais(country, capital, poblation, result );
            return Json(new { Querry = result.Value }, JsonRequestBehavior.AllowGet);

        }
        
    }
}