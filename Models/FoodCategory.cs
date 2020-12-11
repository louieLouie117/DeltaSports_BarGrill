
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace DeltaSports_BarGrill.Models
{
    public class FoodCategory
    {

        [Key]
        public int FoodCategoryId { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string CategoryTitle { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;


        public List<FoodItem> FoodItems { get; set; }


    }

}