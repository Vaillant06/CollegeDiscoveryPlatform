const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const predictColleges = async (req, res) => {
  try {
    const { examId } = req.body;

    const exam = await prisma.exam.findUnique({
      where: {
        id: Number(examId),
      },
      include: {
        college: true,
      },
    });

    if (!exam) {
      return res.status(404).json({
        message: "Exam not found",
      });
    }

    res.json(exam.college);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  predictColleges,
};