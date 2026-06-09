
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCourses = async (req, res) => {
    try {
        const courses = await prisma.course.findMany({
            include:
            {
                colleges: true,
            }
        });

        res.json(courses);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
        }); 
    };
}

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
      include: 
      {
        colleges: true,
      },
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json(course);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = { 
    getCourses, 
    getCourseById 
};