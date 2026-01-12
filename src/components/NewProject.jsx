import { useRef } from "react";
import Input from "./Input";

export default function NewProject(){

const title =useRef();
const description =useRef();
const Dudedate =useRef();

    return (
        <div className="w-[35rem] mt-12">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li className="flex gap-6">
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    <button className=" px-4  py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>

            <div>
               <Input ref={title} label="label"/>
               <Input ref={description} label="Description" textarea/>
               <Input ref={Dudedate} label="Due Date"/>
            </div>
        </div>
    )
}