
import { useNavigate } from "react-router-dom";

export default function PredictorToolPage() {

    const navigate = useNavigate();

    return (
        <>
        <h4>Predictor Tool Page</h4>
        <button
            onClick={() => navigate(-1)}
        >
        Back
        </button>
        </>
    );
}