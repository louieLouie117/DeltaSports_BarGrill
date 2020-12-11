
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DeltaSports_BarGrill.Models
{
    public class FoodItem
    {

        [Key]
        public int FoodItemId { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string ItemTitle { get; set; }


        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string ItemDescription { get; set; }



        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string ItemPrice { get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;


        // F key for the O2M
        public int FoodCategoryId { get; set; }

        public FoodCategory FoodCategory { get; set; }



    }

}