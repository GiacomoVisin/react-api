export default function Card({ actress }) {


    return (

        <div className="card mb-5"  style={{ minHeight: "630px" }}>
            <h3>{actress.name}</h3>
            <div>
                <strong> Birth Year: </strong>
                <span>{actress.birth_year}</span>
            </div>
            <div>
                <strong> Nationality: </strong>
                <span>{actress.nationality}</span>
            </div>
            <br />
            <strong>Biography:</strong>
            <cite className="mb-3">{actress.biography}</cite>
            <div>
            <img className="mb-3" src={actress.image} style={{ width: "200px" }}></img>
            </div>
            <div>
                <strong>Awards: </strong>
                <span>{actress.awards}</span>
            </div>
        </div>
    )
}