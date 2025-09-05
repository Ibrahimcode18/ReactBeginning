

export default function CoreConcepts({image, title, content}){


    return(
        <div>
            <img src={image} />
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}