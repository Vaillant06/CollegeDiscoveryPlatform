const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getColleges = async (req, res) => {
  try {
    const colleges = await prisma.college.findMany({
      include: {
        exams: true,
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

module.exports = {
  getColleges,
};