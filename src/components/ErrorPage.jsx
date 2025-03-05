export default function ErrorPage({error}){
    return(
        <div>
            <h1>An Error occurred..!</h1>
            <p>
                {error}
            </p>
        </div >
    )
}