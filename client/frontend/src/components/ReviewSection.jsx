

export default function ReviewSection({college}) {


    return (
        <>
        <div className="mt-3 px-2">
            <h4 className="fs-4 mt-3">
                <i className="bi bi-chat-right-dots me-2"></i>
                Review Section
            </h4>
            <div className="card review p-2">
                {college.review ? <p>{college.review}</p> 
                : <p className="text-muted">No reviews available.</p>}
            </div>
        </div>  
        </>
    )
}