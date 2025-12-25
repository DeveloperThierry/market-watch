'use client'
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
        defaultValues:{

            fullName:'',
            email:'',
            password:'',
            country:'US',
            investmentGoals:'Growth',
            riskTolerance:'Medium',
            preferredIndustry:'Technology',
        },
        mode:'onBlur'
    }
    );
    const onSubmit: SubmitHandler<SignUpFormData> = async (data:SignUpFormData) => {
        try{console.log(data)}
        catch(error){console.error()}
    };
  
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
            name="fullname" 
            label="Full Name" 
            placeholder="John Doe" 
            register={register} 
            error={errors.fullName}
            validation={{required:'Full name is required', minLength:2}}
        />
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
            {isSubmitting ? 'Creating Account': 'Start Your Investment Journey'}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
