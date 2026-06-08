
export default function InfoTable({ college }) { 
    
    return (
        <div>
            <table className="table table-bordered table-striped table-hover mt">
                <tbody>
                    <tr>
                        <td><strong>College Name</strong></td>
                        <td>{college.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Location</strong></td>
                        <td>{college.city}, {college.state}</td>
                    </tr>
                    <tr>
                        <td><strong>Established</strong></td>
                        <td>{college.established}</td>
                    </tr>
                    <tr>
                        <td><strong>Exams</strong></td>
                        <td>
                            {college.exams?.map((exam) => (
                                <span
                                    key={exam.id}
                                    className="badge bg-primary mx-1"
                                >
                                    {exam.name} 
                                </span>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Placements Rate</strong></td>
                        <td>{college.placementsRate}%</td>
                    </tr>
                    <tr>
                        <td><strong>Co-Education</strong></td>
                        <td>{college.gender}</td>
                    </tr>
                    <tr>
                        <td><strong>Student Count</strong></td>
                        <td>{college.studentCount}</td>
                    </tr>
                    <tr>
                        <td><strong>Faculty Count</strong></td>
                        <td>{college.facultyCount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}