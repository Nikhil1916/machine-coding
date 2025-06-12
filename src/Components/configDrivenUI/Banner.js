const Banner = ({data, className}) => {
    return (
        <div className={`my-4 ${className}`}>
            <img src={data.imageUrl} alt={data.alt} className={data.className} />
        </div>
    );
}

export default Banner;