export interface AcademicRecord {
  id: string;
  course: string;
  year: string;
  institute: string;
  affiliation?: string;
  score: string;
  scoreType: string;
  status: 'Pursuing' | 'Completed';
  summary: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    headline: string;
    email: string;
    phone: string;
    linkedInName: string;
    linkedInUrl: string;
    permanentAddress: {
      place: string;
      taluka: string;
      district: string;
      state: string;
      full: string;
    };
    currentBase: string;
  };
  careerObjective: string;
  aboutMe: string;
  academics: AcademicRecord[];
  technicalSkills: string[];
  competencies: string[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  personalInterests: {
    interest: string;
    detail: string;
  }[];
  internshipStatus: {
    status: string;
    headline: string;
    targetRoles: string[];
    note: string;
  };
  achievements: {
    title: string;
    metric: string;
    context: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    fullName: "Nirjara Vijaykumar Chavan",
    headline: "First Year PGDM Candidate (Finance & Business Management)",
    email: "chavannirjara0@gmail.com",
    phone: "9130428262",
    linkedInName: "nirjara chavan",
    linkedInUrl: "https://www.linkedin.com/search/results/all/?keywords=nirjara%20chavan",
    permanentAddress: {
      place: "A/P – Ashta",
      taluka: "Walwa",
      district: "Sangli",
      state: "Maharashtra, India",
      full: "A/P – Ashta, Tal – Walwa, Dist – Sangli, Maharashtra"
    },
    currentBase: "Pune / Sangli, Maharashtra"
  },
  careerObjective:
    "To build a career in the finance and business domain by applying academic knowledge, developing analytical skills, and gaining hands-on industry experience.",
  aboutMe:
    "First year PGDM with a background in Commerce and a keen interest in Finance and Business Management. Possess strong analytical, communication, teamwork, and problem-solving skills. Eager to apply academic knowledge in a practical corporate environment, gain industry exposure, and continuously develop professional skills. A responsible and adaptable individual with a positive attitude and a strong willingness to learn and grow.",
  academics: [
    {
      id: "pgdm",
      course: "PGDM (Post Graduate Diploma in Management)",
      year: "Pursuing [2026-28]",
      institute: "Institute of Management Development & Research (IMDR®), Pune",
      affiliation: "Deccan Education Society",
      score: "First Year (Pursuing)",
      scoreType: "Current Degree",
      status: "Pursuing",
      summary:
        "Comprehensive management curriculum with rigorous focus on Finance, Business Management, analytical modeling, and organizational decision-making."
    },
    {
      id: "grad",
      course: "Graduation (Commerce)",
      year: "2026",
      institute: "Swaraj College of Arts, Commerce & Science, Pune",
      score: "6.84",
      scoreType: "CGPA / %",
      status: "Completed",
      summary:
        "Foundational education in commercial principles, financial accounting, business organization, corporate law, and economic analysis."
    },
    {
      id: "hsc",
      course: "HSC (Higher Secondary Certificate - 12th)",
      year: "2023",
      institute: "Sanjay Ghodawat Junior College, Atigre",
      score: "87%",
      scoreType: "Percentage",
      status: "Completed",
      summary:
        "Demonstrated academic excellence scoring 87%, establishing strong numerical, commercial, and logical foundations."
    },
    {
      id: "cbse",
      course: "CBSE (Secondary School Examination - 10th)",
      year: "2021",
      institute: "SOU Vijayadevi Yadav English Medium School, Kolhapur",
      score: "78%",
      scoreType: "Percentage",
      status: "Completed",
      summary:
        "Completed secondary education in English medium with 78%, developing well-rounded communication and conceptual aptitudes."
    }
  ],
  technicalSkills: [
    "WPS Office",
    "Presentation preparation",
    "Basic computer skills"
  ],
  competencies: [
    "Financial concepts",
    "Communication skills",
    "Quick learning",
    "Analytical skills",
    "Problem-solving",
    "Teamwork",
    "Adaptability",
    "Responsible & positive attitude"
  ],
  languages: [
    { language: "English", proficiency: "Professional & Academic" },
    { language: "Hindi", proficiency: "Proficient" },
    { language: "Marathi", proficiency: "Native / Fluent" }
  ],
  personalInterests: [
    {
      interest: "Reading novels",
      detail: "Expands critical perspective, vocabulary, and sustained focus."
    },
    {
      interest: "Anchoring",
      detail: "Live public speaking, emceeing events, audience engagement, and stage composure."
    },
    {
      interest: "Curious to learn new concepts",
      detail: "Self-driven motivation to research and master unfamiliar finance topics."
    },
    {
      interest: "Listening to songs",
      detail: "Creative relaxation that aids balance and mental clarity."
    }
  ],
  internshipStatus: {
    status: "Actively Seeking Opportunities",
    headline: "Summer & Winter Internships / Entry-Level Finance Positions",
    targetRoles: [
      "Finance Management Intern",
      "Business Analyst Intern",
      "Financial Operations Trainee",
      "Corporate Finance & Accounts Intern"
    ],
    note: "As a first-year PGDM candidate at IMDR Pune, Nirjara is ready to apply rigorous academic foundations and commercial skills to real-world corporate challenges."
  },
  achievements: [
    {
      title: "HSC Academic Distinction",
      metric: "87%",
      context: "Secured high distinction in 12th Board examinations at Sanjay Ghodawat Junior College."
    },
    {
      title: "Prestigious IMDR Admission",
      metric: "Batch 2026–28",
      context: "Admitted into Deccan Education Society's IMDR Pune for the premier PGDM program."
    },
    {
      title: "CBSE English Medium Achievement",
      metric: "78%",
      context: "Strong first-class performance in Class 10th at SOU Vijayadevi Yadav School, Kolhapur."
    },
    {
      title: "Anchoring & Public Communication",
      metric: "Stage Hosting",
      context: "Demonstrated stage presence, articulate verbal delivery, and audience management."
    }
  ]
};
