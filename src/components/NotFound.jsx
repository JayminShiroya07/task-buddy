import { Link, useRouteError } from 'react-router-dom'
import image from '../assets/404.png'

export default function NotFound(){

    const error = useRouteError();
    console.log("error = ", error);


    return(
        <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <img src={image} alt="404 Page Not found" className=''/>
            <h2 className='text-2xl'>Page not found..!</h2>
            <Link to='/' className='py-2 px-10  rounded-md text-center bg-cyan-400'>Go Back</Link>
        </div>
    )
}