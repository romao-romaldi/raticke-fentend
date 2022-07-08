import React from 'react';
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik"
import Link from 'next/link';
import Image from 'next/image';
import * as Cg from "react-icons/cg"
import { CreateUserPost } from '../utility/postsApi';
import { toast } from 'react-toastify';


const Signup = () => {

    const [type_user, SetType_user] = React.useState("particulier")
    const [is_verified, setIs_verified] = React.useState(true)

    const initialValues = {
        last_name :"", 
        first_name :"",
        tel :"",
        email :"",
        pays :"Congo", 
        district :"",
        city :"",
        password :"",
        password2  :""

    }

    const validationSchema = Yup.object().shape({
        last_name: Yup.string().required('le Nom est obligatoire !').min(2, "Le Nom doit avoir au moi deux(2) caractère !")
                .matches(/^([a-zA-Zéèùûüẑêë\-\s]{2,}[ ]?)+$/, "le nom ne doit pas contenir de chiffre ou des caractère spetiaux"),
        first_name: Yup.string().required('le Prénom est obligatoire !').min(2, "Le Prénom doit avoir au moi deux(2) caractère !")
                    .matches(/^([a-zA-Zéèùûüẑêë\-\s]{2,}[ ]?)+$/, "le prénom ne doit pas contenir de chiffre ou des caractère spetiaux"),

        tel: Yup.string().required('Le numéro de telephone est obligatoire !').min(6, "Le télephone ne doit avoir plus de 6 caractère !")
                .matches(/^\+[\d]{6,14}/,"le numéro de telephone doit obligatoire commancer par un +, et ne doit pas contenir les lettres"),
        email: Yup.string().email("Veillez entre un format email valide !").optional()
                .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Entrez une email valide"),
        city: Yup.string().required("La ville est obligatoire !")
            .matches(/^([a-zA-Z\-\s]{2,}[ ]?)+$/, "Ce champs ne doit pas contenir de chiffre ou des caractère spetiaux"),
        pays: Yup.string().required("Le Pays est obligatoire !")
                .matches(/^([a-zA-Z\-\s]{2,}[ ]?)+$/, "Ce champs ne doit pas contenir de chiffre ou des caractère spetiaux"),
        district: Yup.string().required("Le pays est obligatoire !")
                .matches(/^([a-zA-Z\-\s]{2,}[ ]?)+$/, "Ce champs ne doit pas contenir de chiffre ou des caractère spetiaux"),
        password: Yup.string().required("Le mot de passe est obligatoire !").min(6, "Le mot de passe doit avoir au moins six(6) caractère !")
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&\s]{8,}$/,
                     "le mot de passe doit constenir au moins six(6) caractère, une lettre majiscul et miniscul, un chiffre"),
        password2: Yup.string().required("Le mot de passe est obligatoire !").oneOf([Yup.ref("password")], "Les mots de passe ne corespondent pas !")


    })

    const handleSubmit = async(values) => {
       
        const data = values
        data.type_user = type_user
        
        try{   
            const res = await CreateUserPost(data);

            console.log("test", res)
            console.log("data res :", res.data)

          

        } catch (err) {
            console.log("je suis l'erreur trouver :",err.response.data.detail)
            toast.error(err.response.data.detail)
        }
            
        
    }



    return (
        <div className="flex h-full">
            <div className="animate-pulse flex flex-col  w-full md:w-1/2  px-10  items-center gap-2 justify-center py-6">
                <div className='flex justify-center'>
                    <div className="relative h-16 w-64 ">
                        <Image src="/logo512.svg" layout='fill' objectFit='cover' />
                    </div>
                </div>
            
                <div className="w-[300px] cursor-pointer ">
                    <Link href="/">
                        <a>
                            <Cg.CgArrowLongLeft className="text-2xl"/>
                        </a>
                    </Link>
                </div>
                
                <div className="flex justify-center font-semibold text-2xl pb-5">
                    <h3>Création de compte</h3>
                </div >
                <Formik 
                    initialValues={initialValues}
                    onSubmit = {handleSubmit}
                    validationSchema={validationSchema}
                >
                    {formik => (
                            <Form className="flex flex-col">
                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                        <label htmlFor="tel">Type de compte <span className='text-red-500'>*</span></label>
                                        <div className="flex ">
                                            <div className='flex flex-col w-[300px] gap-2 items-center'>
                                                <label htmlFor="last_name" className='text-slate-600'>Particulier</label>
                                                <input type="radio" name="last_name" className="rounded-lg border-blue-600"  
                                                onChange={() => SetType_user("particulier")} checked={type_user === "particulier" ? true: false} />
                                            </div>
                                            <div className='flex flex-col w-[300px] gap-2 items-center'>
                                                <label htmlFor="last_name" className='text-slate-600'>Professionnel </label>
                                                <input type="radio" name="last_name" className="rounded-lg border-blue-600"
                                                onChange={() => SetType_user("professionnel")} checked={type_user === "professionnel" ? true: false} />
                                            </div>
                                            <div className='flex flex-col w-[300px] gap-2 items-center'>
                                                <label htmlFor="last_name" className='text-slate-600'>Entreprise </label>
                                                <input type="radio" name="last_name" className="rounded-lg border-blue-600"
                                                onChange={() => SetType_user("entreprise")} checked={type_user === "entreprise" ? true: false} />
                                            </div>
                                        </div>
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="last_name">Nom <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="last_name"  className="rounded-lg border-blue-600 h-8 text-sm 
                                        placeholder:text-xs"  placeholder="Entrez votre nom" />
                                    <ErrorMessage name="last_name" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="first_name">Prénom <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="first_name" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                        placeholder='Entrer votre prénom'
                                     />
                                    <ErrorMessage name="first_name" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="tel">Tel <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="tel" className="rounded-lg border-blue-600 h-8 text-sm 
                                        placeholder:text-xs" placeholder="Entrez votre tel" />
                                    <ErrorMessage name="tel" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="email">Email </label>
                                    <Field type="text" name="email" className="rounded-lg border-blue-600 h-8 text-sm 
                                    placeholder:text-xs" placeholder="Entrez votre email" />
                                    <ErrorMessage name="email" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="pays">Pays <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="pays" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                        placeholder='Entrer votre pays' />
                                    <ErrorMessage name="pays" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="city">Ville <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="city" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                        placeholder='Entrer votre ville' />
                                    <ErrorMessage name="city" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="district">Quartier <span className='text-red-500'>*</span></label>
                                    <Field type="text" name="district" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                        placeholder='Entrer votre ville' />
                                    <ErrorMessage name="district" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="password">Mot de passe <span className='text-red-500'>*</span></label>
                                    <Field type="password" name="password" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                         placeholder='Entrer votre mot de passe' />
                                    <ErrorMessage name="password" component="div" className="text-red-600" />
                                </div>

                                <div className='flex flex-col w-[300px] gap-2 pb-3'>
                                    <label htmlFor="password2">Confirme mot de passe <span className='text-red-500'>*</span></label>
                                    <Field type="password" name="password2" className="rounded-lg border-blue-600 placeholder:text-xs h-8 text-sm" 
                                        placeholder='Confirmer votre mot de passe' 
                                    />
                                    <ErrorMessage name="password2" component="div" className="text-red-600" />
                                </div>

                                <div className="py-1 w-[300px] text-xs flex gap-1">
                                    <input type="checkbox"  id="" checked={is_verified} onChange={() => setIs_verified(!is_verified)}  />
                                    <p>
                                        En créant un compte, vous acceptez les <span className="text-amber-600 cursor-pointer">conditions générales de vente de Raticke</span>. 
                                        Veuillez consulter notre <span className="text-blue-600 cursor-pointer">notice Protection de vos Informations Personnelles</span>,
                                        notre <span className="text-blue-600 cursor-pointer">notice Cookies</span> et <span className="text-blue-600 cursor-pointer">notre notice Annonces publicitaires basées sur vos
                                        centres d’intérêt</span>.
                                    </p>
                                </div>

                                <button disabled={ formik.isSubmitting || !formik.isValid || !is_verified } type="submit"
                                        className={`py-1 w-[300px] rounded-lg flex justify-center items-center gap-4 ${!is_verified || formik.isSubmitting || !formik.isValid ? "bg-slate-600 cursor-none" : 'bg-amber-600 justify-center font-semibold text-base \
                                        hover:bg-amber-500 mt-2 cursor-pointer' }`}  >Connexion
                                         {formik.isSubmitting && <Cg.CgSpinner className="animate-spin text-3xl" />}
                                        </button>
                            </Form>
                        )                        
                    }
                </Formik>
                <Link href="/login">
                    <a className="w-[300px] pt-3 text-blue-600 cursor-pointer ">Se connecter</a>
                </Link>
                
                
            </div>
            <div className="w-0 md:w-1/2 bg-blue-700">

            </div>
        </div>
    )
}

export default Signup;
