

export default function BreadCrumb({ college }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="/">Home</a>
                </li>

                <li className="breadcrumb-item">
                <a href="/">Colleges</a>
                </li>

                <li
                className="breadcrumb-item active"
                aria-current="page"
                >
                {college.acronym}
                </li>
            </ol>
        </nav>
    )
}