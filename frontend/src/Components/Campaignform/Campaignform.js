import React from 'react'

import { useForm } from 'react-hook-form'

 
function CampaignForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>{
    console.log('hello',data);
  }
  return (

    <div>
       <form onSubmit= {handleSubmit(onSubmit)}>
         
       <input type = "text" name='email'{...register('email', { required: true })}placeholder='Email' />
       <input  type= 'password' name='password' {...register('password', { required: true })} placeholder='Password'/>
       {/* {errors.password && <p> Password is invalid </p>} */}

        <input type = "submit"/>
       </form>
       </div>
   
  );
}

export default CampaignForm;
