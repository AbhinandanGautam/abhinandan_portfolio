import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        window.location.href = `mailto:abhinandang2003@gmail?subject=${data.subject}& body =Hi, My Name is ${data.name}. ${data.message}`
    };
  
    return (
    <div className='h-screen flex relative flex-col text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-xl sm:text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10' style={{"marginTop" : "90px"}}>
            <h4 className='lext-lg sm:text-2xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#66FCF1]/50'>Lets Talk</span>
            </h4>

            <div className='space-y-3 sm:space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#66FCF1] h-7 w-7 animate-pulse'/>
                    <p className='text-lg sm:text-xl'>+91 9464331633</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#66FCF1] h-7 w-7 animate-pulse'/>
                    <p className='text-lg sm:text-xl'>abhinandang2003@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#66FCF1] h-7 w-7 animate-pulse'/>
                    <p className='text-lg sm:text-xl'>NIT Jalandhar, Punjab</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[90%] sm:w-fit mx-auto'>
                <div className='flex space-x-1 sm:space-x-2'>
                    <input {...register("name")} placeholder='Name' className='contactInput w-36 overflow-auto' type="text" />
                    <input {...register("email")} placeholder='Email' className='contactInput w-36 overflow-auto' type="email" />
                </div>

                <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register("message")} placeholder='Message' className='contactInput' />

                <button type='submit' className='bg-[#66FCF1] py-3 px-5 sm:py-5 sm:px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe