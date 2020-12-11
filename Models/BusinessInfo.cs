using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DeltaSports_BarGrill.Models
{
    public class BusinessInfo
    {

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string Address { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string MondayHours { get; set; }


        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string TuedayHours { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string WednesdayHours { get; set; }


        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string ThurdayHours { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string FridayHours { get; set; }


        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string SaturdayHours { get; set; }

        [Display]
        [Required(ErrorMessage = "Can not be empty")]
        [MinLength(2, ErrorMessage = "That is to short")]
        public string SundayHours { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;




    }

}