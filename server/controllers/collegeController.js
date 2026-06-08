const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


/* Get all colleges */

const getColleges = async (req, res) => {
  try {
    const colleges = await prisma.college.findMany({
      include: {
        exams: true,
        courses: true,
      },
    });
    
    res.json(colleges);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

/* Get a college by its ID */

const getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;

    const college = await prisma.college.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        exams: true,
        courses: true,
      },
    });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.json(college);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getColleges,
  getCollegeById,
};