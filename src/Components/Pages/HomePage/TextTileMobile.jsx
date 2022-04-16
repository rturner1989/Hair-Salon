const TextTileMobile = ({ tile }) => {
    const { title, blurb, img, imgAlt, innerText, reverse } = tile;

    return (
        <div>
            <div className={`tile ${reverse} `}>
                <div className="tile-text">
                    <h4>{title}</h4>
                    <p>{blurb}</p>
                </div>
                <div className="tile-img-container">
                    <img className="tile-img" src={img} alt={imgAlt} />
                    <div className="tile-hover">
                        <p>{innerText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextTileMobile;
