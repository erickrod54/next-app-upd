const HelloWithId = ( {params} ) => {
    return(
        <div> 
            <h1> Hello World  page with ID: { params.id }</h1>
        </div>
    )
}

export default HelloWithId;