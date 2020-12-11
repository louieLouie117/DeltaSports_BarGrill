using System;
using Microsoft.AspNetCore.Mvc;
using DeltaSports_BarGrill.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace DeltaSports_BarGrill.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }


        // Navigation no process
        [HttpGet("signin")]
        public IActionResult gotoSignin()
        {
            return RedirectToAction("login");
        }

        [HttpGet("registration")]
        public IActionResult gotoRegistration()
        {
            return RedirectToAction("reg");
        }

        // -----------------------------------------------------------end

        // Rendering Pages in Views--------------------------------------------
        [HttpGet("")]
        public IActionResult index()
        {

            dashboardWrapper WMod = new dashboardWrapper();


            // ViewBag.allFoodCategories = _context.FoodCategories.ToList();
            ViewBag.allFoodItems = _context.foodItems.ToList();

            ViewBag.allFoodCategories = _context.FoodCategories.Include(d => d.FoodItems).ToList();
            return View("index", WMod);

        }


        [HttpGet("reg")]
        public IActionResult reg()
        {
            return View("reg");
        }


        [HttpGet("login")]
        public IActionResult login()
        {
            return View("login");
        }


        [HttpGet("dashboard")]
        public IActionResult dashboard()
        {
            // block pages is not in session 
            if (HttpContext.Session.GetInt32("UserId") == null)
            {
                return RedirectToAction("index");
            }

            dashboardWrapper WMod = new dashboardWrapper();

            ViewBag.allFoodItems = _context.foodItems.ToList();
            ViewBag.allFoodCategories = _context.FoodCategories.ToList();
            // ViewBag.allFoodCategories = _context.FoodCategories.Include(d => d.FoodItems).ToList();



            return View("dashboard", WMod);

        }
        // -----------------------------------------------------------end


        // CRUD opporations for Categories-------------------------------------

        [HttpPost("CreateCategory")]
        public IActionResult CreateCategory(FoodCategory FromForm)
        {
            System.Console.WriteLine("careate button was click");
            System.Console.WriteLine("Category careted:", FromForm);

            _context.Add(FromForm);
            _context.SaveChanges();

            return RedirectToAction("dashboard");
        }

        [HttpGet("delete/{FoodCategoryId}")]

        public IActionResult delete(int FoodCategoryId)
        {
            System.Console.WriteLine("delete button was click");

            FoodCategory GetFoodCategory = _context.FoodCategories
            .SingleOrDefault(fc => fc.FoodCategoryId == FoodCategoryId);

            _context.FoodCategories.Remove(GetFoodCategory);
            _context.SaveChanges();



            return RedirectToAction("dashboard");
        }


        // CRUD opporations for items------------------------------------

        [HttpPost("CreateItem")]
        public IActionResult CreateItem(FoodItem FromForm)
        {
            System.Console.WriteLine("careate button was click");

            _context.Add(FromForm);
            _context.SaveChanges();

            return RedirectToAction("dashboard");
        }



        [HttpGet("deleteItem/{FoodItemId}")]

        public IActionResult deleteItem(int FoodItemId)
        {
            System.Console.WriteLine("delete button was click");

            FoodItem getFoodItem = _context.foodItems
            .SingleOrDefault(fc => fc.FoodItemId == FoodItemId);

            _context.foodItems.Remove(getFoodItem);
            _context.SaveChanges();



            return RedirectToAction("dashboard");
        }


        // Processing Registration and Login-------------------------------------------------
        [HttpPost("Redgister")]
        public IActionResult Redgister(User FromForm)
        {
            // Check if email is already in db
            if (_context.Users.Any(u => u.Email == FromForm.Email))
            {
                ModelState.AddModelError("Email", "Email already in use!");
            }

            // Validations
            if (ModelState.IsValid)
            {
                // #hash password
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                FromForm.Password = Hasher.HashPassword(FromForm, FromForm.Password);

                // Add to db
                _context.Add(FromForm);
                _context.SaveChanges();

                // Session
                HttpContext.Session.SetInt32("UserId", _context.Users.FirstOrDefault(i => i.UserId == FromForm.UserId).UserId);
                // Redirect
                System.Console.WriteLine("You may contine!");
                return RedirectToAction("dashboard");
            }
            else
            {
                System.Console.WriteLine("Fix your erros!");
                return View("index");

            }

        }



        //Processing Registration Login-------------------------------------------------    
        [HttpPost("Login")]
        public IActionResult Login(LoginUser userSubmission)
        {
            // Validations
            if (ModelState.IsValid)
            {
                // Check db email with from email
                var userInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.Email);

                // No user in db
                if (userInDb == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("login");
                }
                // Check hashing are the same
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.Password);

                if (result == 0)
                {
                    // handle failure (this should be similar to how "existing email" is handled)
                }
                // Set Session Instance
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("dashboard");

            }

            return View("login");

        }


        [HttpGet("logout")]
        public IActionResult logout()
        {
            // Clear Session
            HttpContext.Session.Clear();
            return RedirectToAction("index");
        }



        // ------------------------------------------end of registration and login








    }
}