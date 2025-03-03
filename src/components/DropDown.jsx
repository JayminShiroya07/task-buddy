export default function DropDown({label,name,id,children}) {
    return (
        <div className="flex flex-col items-start gap-1">
            {label && <label>{label}</label>}
            <select id={id} name={name} className="p-1 w-full rounded outline-1">
                {children}
            </select>
        </div>
    )
}