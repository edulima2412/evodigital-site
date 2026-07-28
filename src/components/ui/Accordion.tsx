import { useState } from "react";

type Props = {

    title:string;

    content:string;

};

export default function Accordion({

    title,

    content

}:Props){

    const [open,setOpen]=useState(false);

    return(

        <div className="rounded-2xl border border-zinc-800">

            <button

                className="flex w-full justify-between p-6 text-left"

                onClick={()=>setOpen(!open)}

            >

                <span>{title}</span>

                <span>{open?"−":"+"}</span>

            </button>

            {open&&(

                <div className="px-6 pb-6 text-zinc-400">

                    {content}

                </div>

            )}

        </div>

    )

}