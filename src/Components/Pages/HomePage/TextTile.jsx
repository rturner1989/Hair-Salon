const TextTile = ({ identifier, title, para }) => {
    return (
        <div className={identifier}>
            <h4>{title}</h4>
            <p>{para}</p>
        </div>
    );
};

export default TextTile;
