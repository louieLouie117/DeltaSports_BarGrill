
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DeltaSports_BarGrill.Models
{
    public class DailySpecial
    {


        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string DailySpecialTitle { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;




    }

}