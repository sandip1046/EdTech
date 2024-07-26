// SignUp component which will navigate to the SignIn page after completing Signup and it also contains the option to navigate to the Signin page if the user already have an account

import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import z from"zod";
import { auth } from "../../firebaseAuth";

//creating the zod schema
export const signupInput = z.object({
    email: z.string().email(),
    password : z.string().min(6),
    name: z.string().optional()
});

export type SignupInput = z.infer<typeof signupInput>;

export const Sign = () => {

    const navigate =useNavigate();


    // infering the  zod type variable to the state variable. 
    //like this we can figure what the BE need
    const [postInputs, setPostInput] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sendRequest = (e:any) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, postInputs.email, postInputs.password )
        .then(() =>{
            navigate('/signin')
            alert("SignUp successfully completed!")
        }).catch((error) => {
            console.log(error);
        })
    }


    return <div className="flex items-center  justify-center h-screen m-0">

        <div className="flex flex-col items-center  justify-center rounded-md border-slate-300  bg-slate-100 border-2 m-0 p-7 w-fit  shadow-2xl">
            {/* heading div */}
            <div className="font-serif text-3xl	font-extrabold	mt-1 p-1 w-full">Create an account"</div>
            {/* if account already present then this should have the link to route to the sigin page*/}
            <div className="flex flex-row">
                <div className="font-sans text-sm font-base text-slate-800 p-2">Already have an account?</div>
                <Link to="/signin" className="underline underline-offset-4 text-blue-500  font-sans text-md font-semibold cursor-pointer p-1 hover:text-gray-800	">Sign in</Link>   {/* this link will route to sigin page onclick  */}
            </div>

           

            <LabelledInput label="email" placeholder="email@gmail.com" onChange={(e) => {
                setPostInput({
                    ...postInputs, //take all the existing keys and value 
                    email: e.target.value //overwrite the name  in that existing key 
                })
            }
            } />
            <LabelledInput label="Password" type={"password"} placeholder="XXXXXXXXXX" onChange={(e) => {
                setPostInput(postInputs => ({
                    ...postInputs, //take all the existing keys and value 
                    password: e.target.value //overwrite the name  in that existing key 
                }))
            }
            } />

            

          

            <button onClick={sendRequest} className="rounded-md border-black bg-black border-1 text-white	mt-5 p-2 h-full	w-full hover:bg-gray-800	">Sign up</button>



        </div>

    </div>

            }
// type NewType = ChangeEvent<HTMLInputElement>;

// type NewType_1 = NewType;

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;  //type is optional because all field doesnot require as a argument. it is required for password field because it helps to hide the password while typing.
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div className="m-0 w-full">
        <div><label className="p-1">{label}</label></div>
        <div><input onChange={onChange} type={type || "text"} className="rounded-md border-stone-500  border-2 p-1 w-full focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} required ></input>
        </div>
    </div>
}