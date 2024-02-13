import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  basicInformation: {
    type: String,
    required: true,
  },
  profileSummary: {
    type: String,
    required: true,
  },
  academicAchievements: [
    {
      course: {
        type: String,
      },
      cgpa: {
        type: Number,
      },
      institution: {
        type: String,
      },
    },
  ],
  internshipsAndWorkExperience: [
    {
      companyName: {
        type: String,
      },
      years: {
        type: Number,
      },
    },
  ],
  projects: [
    {
      projectName: {
        type: String,
      },
      briefOverview: {
        type: String,
      },
      techStack: {
        type: [String],
      },
    },
  ],
  certificationsAndTraining: [
    {
      courseName: {
        type: String,
      },
      certification: {
        type: String,
      },
    },
  ],
  linksAndExternalContent: [
    {
      siteName: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
});
const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

export default Portfolio;
