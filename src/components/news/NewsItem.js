
const NewsItem = ({image, title, author}) => {
    return (
        <>
            <h3>{title}</h3>
            <div className="card">
                <img src={image} alt={title} />
                <p>{author}</p>
            </div>
        </>
    )
}

export default NewsItem;
