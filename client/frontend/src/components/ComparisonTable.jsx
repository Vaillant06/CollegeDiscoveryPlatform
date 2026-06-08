
export default function ComparisonTable({selectedColleges}) {

    return (
        <div className="mt-5">
            <h3 className="mb-4">
                Comparison Table
            </h3>

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover fs-5">

                <thead>
                    <tr>
                    <th>Attribute</th>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <th key={index}>
                            {college.name}
                            </th>
                        )
                    )}
                    </tr>
                </thead>

                <tbody>

                    <tr>
                    <td>Location</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.city}, {college.state}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Average Fees</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            ₹ {college.fees} Lakh/Year
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>NIRF Ranking</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.nirfRanking}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Placement Rate</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.placementsRate}%
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Ownership</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.ownership}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Courses Offered</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.courses?.length > 0 ? college.courses.length : "N/A"}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Exams</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                                {college.exams?.map((exam) => (
                                    <span
                                        key={exam.id}
                                        className="badge bg-primary mx-1"
                                    >
                                        {exam.name} 
                                    </span>
                                ))}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Student Count</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.studentCount || "N/A"}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Faculty Count</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.facultyCount || "N/A"}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Established Year</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.established || "N/A"}
                            </td>
                        )
                    )}
                    </tr>

                    <tr>
                    <td>Campus Size</td>

                    {selectedColleges.map(
                        (college, index) =>
                        college && (
                            <td key={index}>
                            {college.campusSize || "N/A"}
                            </td>
                        )
                    )}
                    </tr>                

                </tbody>
                </table>
            </div>
        </div>
    );
}