export default function Input({textarea,id,name,label,type, errorMassage, ...props }) {
    if(textarea){
        return( 
            <div className="flex flex-col items-start gap-1">
            <label htmlFor={id} className="text-gray-900">{label} </label>
            <textarea
                id={id} 
                name={name} 
                {...props}
                className="p-1 w-full rounded outline-1"
            />
            {errorMassage && <p className="text-red-500">{errorMassage}</p>}
        </div>
        )
    }
    return (
        <div className="flex flex-col items-start gap-1">
            <label htmlFor={id} className="text-gray-900">{label}</label>
            <input className="p-1 w-full rounded outline-1" type={type} id={id} name={name} {...props}/>
            {errorMassage && <p className="text-red-500">{errorMassage}</p>}
        </div>
    )
}