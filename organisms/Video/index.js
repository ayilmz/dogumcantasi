
const Products = ({videos}) => {
    return (
        <ul className="d-flex justify-content-between">
            {videos?.map((video, index) => (
                <li key={index}>
                    <p>{video.title}</p>
                </li>
            ))}
        </ul>
    )
};

export default Products;