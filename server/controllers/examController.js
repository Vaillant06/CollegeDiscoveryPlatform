const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


/* Get all exams */

const getExams = async (req, res) => {
  try {
    const exams = await prisma.exam.findMany({
      include: {
        colleges: true,
      },
    });

    res.json(exams);
  } catch (error) {
    console.error(error); 

    res.status(500).json({
      message: "Server Error",
    });
  }
};


/* Get exam by ID */

const getExamById = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await prisma.exam.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        colleges: true,
      },
    });

    if (!exam) {
      return res.status(404).json({
        message: "Exam not found",
      });
    }

    res.json(exam);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  getExams,
  getExamById,
};