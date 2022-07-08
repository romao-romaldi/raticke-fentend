import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import * as Cg from 'react-icons/cg';
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { LoginUser } from '../utility/postsApi';
import { toast } from 'react-toastify';

const Login = () => {

    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Ce champs est obligatoire !"),
        password: Yup.string().required("Le mot de passe est obligatoire !").min(6, "Le mot de passe doit avoir au moins six(6) caractère !")
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&\s]{8,}$/,
                     "le mot de passe doit constenir au moins six(6) caractère, une lettre majiscul et miniscul, un chiffre"),
    })
    

    const onSubmit = async(values) => {
        const data = values
        

        try{   
            const res = await LoginUser(data);

            console.log("test", res)
            console.log("data res :", res.data)
            toast.success("Merci de vous êtes connecter !")

        } catch (err) {
            toast.error("Ce compte n'exist pas, Veillez verifier que vous avez entrer les bonnes infomation")
        }
    }


    return (
        <div className="flex h-screen">
            <div className="flex flex-col  w-full md:w-1/2  px-10  items-center gap-2 justify-center">
                <div className='flex justify-center'>
                    <div className="relative h-20 w-72 ">
                        <Image src="/logo512.svg" layout='fill' objectFit='cover' />
                    </div>
                </div>
            
                <div className="w-[300px] cursor-pointer ">
                    <Link href="/">
                        <a>
                            <Cg.CgArrowLongLeft className="text-3xl"/>
                        </a>
                    </Link>
                </div>
                
                <div className="flex justify-center font-semibold text-3xl pb-5">
                    <h3>Se Connecter</h3>
                </div >
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                   {formik => (<Form>
                        <div className='flex flex-col w-[300px] gap-2 font-medium pb-3'>
                            <label htmlFor="username">Identifiant/email/tel <span className='text-red-500'>*</span></label>
                            <Field type="text" name="username" className="rounded-lg border-blue-600  
                            placeholder:text-xs" 
                                placeholder="Entrez votre identifiant ou votre email ou votre tel" />
                            <ErrorMessage name="username" className="text-red-600" component="div" />
                        </div>

                        <div className='flex flex-col w-[300px] gap-2 font-medium pb-3'>
                            <label htmlFor="password">Mot de passe <span className='text-red-500'>*</span></label>
                            <Field type="password" name="password" className="rounded-lg border-blue-600 placeholder:text-xs" 
                            placeholder='Entrez votre mot de passe'/>
                            <ErrorMessage name="password" className="text-red-600" component="div" />
                        </div>

                        <div className="w-[300px] flex justify-end cursor-pointer">
                            <p>Mot de passe oublié</p>
                        </div>

                        <button type="submit" disabled={formik.isSubmitting || !formik.isValid} className={`py-1 w-[300px] rounded-lg flex justify-center items-center gap-4 ${formik.isSubmitting || !formik.isValid ? "bg-slate-600 cursor-none" : 'bg-amber-600 \
                            justify-center font-semibold text-base hover:bg-amber-500 mt-2 cursor-pointer' }`}>Connexion 
                            
                            {formik.isSubmitting && <Cg.CgSpinner className="animate-spin text-3xl" />}
                            </button>
                    </Form>)}
                </Formik>
                <Link href="/signup">
                    <a className="w-[300px] pt-3 text-blue-600 cursor-pointer">Créer un compte</a>
                </Link>
                <div>

                </div>
            </div>
            <div className="w-0 md:w-1/2 bg-blue-700">

            </div>
        </div>
    );
}

export default Login;
