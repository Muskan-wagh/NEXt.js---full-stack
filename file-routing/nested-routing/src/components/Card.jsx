
const Card = ({ Children }) => {
    const cardStyle = {
        padding: "100px",
        display: "flex",
    };

    return <div style={cardStyle}>{Children}</div>
}