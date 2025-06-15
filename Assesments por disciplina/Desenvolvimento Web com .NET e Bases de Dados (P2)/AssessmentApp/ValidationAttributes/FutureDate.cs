using System;
using System.ComponentModel.DataAnnotations;

namespace AssessmentApp.ValidationAttributes;

public class FutureDate : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is DateTime date && date > DateTime.Now){
            return new ValidationResult("A data deve ser no futuro.");
        }
        return ValidationResult.Success;
    }
}
