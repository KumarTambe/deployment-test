import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    return (
        <h1> Viewing Movie : {id}</h1>
    )
}

export default MovieDetail;