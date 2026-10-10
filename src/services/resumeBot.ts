import { RESUME_DATA } from '../data/resumeData';

export interface BotResponse {
  answer: string;
  sourceSection: string;
  suggestedFollowUps: string[];
}

export function answerResumeQuestion(rawQuery: string): BotResponse {
  const query = rawQuery.toLowerCase().trim();

  // 1. Contact / Email / Phone / Address / Location
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('mobile') ||
    query.includes('call') ||
    query.includes('reach') ||
    query.includes('linkedin') ||
    query.includes('address') ||
    query.includes('location') ||
    query.includes('where does she live') ||
    query.includes('sangli') ||
    query.includes('pune')
  ) {
    return {
      answer: `You can reach Nirjara Vijaykumar Chavan directly through:\n\n• Email: ${RESUME_DATA.personalInfo.email}\n• Phone: +91 ${RESUME_DATA.personalInfo.phone}\n• LinkedIn: ${RESUME_DATA.personalInfo.linkedInName}\n• Location: ${RESUME_DATA.personalInfo.permanentAddress.full} (Currently available in Pune / Sangli for internships).`,
      sourceSection: 'Personal Information & Contact',
      suggestedFollowUps: [
        'What is her career objective?',
        'What is her educational background?',
        'What roles is she seeking?'
      ]
    };
  }

  // 2. Education / Academics / College / IMDR / Graduation / School
  if (
    query.includes('education') ||
    query.includes('academic') ||
    query.includes('college') ||
    query.includes('school') ||
    query.includes('degree') ||
    query.includes('imdr') ||
    query.includes('pgdm') ||
    query.includes('qualification') ||
    query.includes('study') ||
    query.includes('studied') ||
    query.includes('swaraj') ||
    query.includes('ghodawat') ||
    query.includes('cbse') ||
    query.includes('hsc') ||
    query.includes('10th') ||
    query.includes('12th') ||
    query.includes('marks') ||
    query.includes('percentage') ||
    query.includes('cgpa') ||
    query.includes('score')
  ) {
    const academicsList = RESUME_DATA.academics
      .map(
        (a) =>
          `• ${a.course} (${a.year}): ${a.institute} — Score: ${a.score}`
      )
      .join('\n');

    return {
      answer: `Nirjara's complete academic qualifications according to her resume:\n\n${academicsList}\n\nKey highlights include 87% in HSC, 78% in CBSE (English Medium), graduation in Commerce (6.84 CGPA), and her current enrollment in the 2-year PGDM [2026-28] program at IMDR Pune.`,
      sourceSection: 'Academics & Qualifications',
      suggestedFollowUps: [
        'What are her technical skills?',
        'What is her career objective?',
        'Does she have internship experience?'
      ]
    };
  }

  // 3. Skills / Technical / WPS / Office / Computer / Competencies / Finance
  if (
    query.includes('skill') ||
    query.includes('technical') ||
    query.includes('competenc') ||
    query.includes('wps') ||
    query.includes('software') ||
    query.includes('tool') ||
    query.includes('computer') ||
    query.includes('presentation') ||
    query.includes('powerpoint') ||
    query.includes('excel') ||
    query.includes('finance') ||
    query.includes('financial') ||
    query.includes('analytical')
  ) {
    return {
      answer: `Nirjara's verified skills from her resume:\n\n• Technical Skills: ${RESUME_DATA.technicalSkills.join(', ')}\n• Core Competencies: ${RESUME_DATA.competencies.join(', ')}\n\nWith a Commerce foundation and PGDM training in Finance, she understands core financial concepts, has strong presentation preparation capabilities, and learns new software and workflows rapidly.`,
      sourceSection: 'Technical Skills & Competencies',
      suggestedFollowUps: [
        'What languages does she know?',
        'What is her educational background?',
        'Why hire Nirjara for an internship?'
      ]
    };
  }

  // 4. Objective / Career Goals / Ambition
  if (
    query.includes('objective') ||
    query.includes('goal') ||
    query.includes('ambition') ||
    query.includes('aim') ||
    query.includes('career') ||
    query.includes('vision')
  ) {
    return {
      answer: `Nirjara's career objective stated on her resume:\n\n"${RESUME_DATA.careerObjective}"\n\nShe is eager to bridge academic theory with real business operations through structured industry exposure.`,
      sourceSection: 'Career Objective',
      suggestedFollowUps: [
        'What roles is she looking for?',
        'Tell me about her background',
        'What are her key competencies?'
      ]
    };
  }

  // 5. Internship / Work Experience / Projects
  if (
    query.includes('intern') ||
    query.includes('experience') ||
    query.includes('work') ||
    query.includes('job') ||
    query.includes('project') ||
    query.includes('employment') ||
    query.includes('history')
  ) {
    return {
      answer: `Nirjara is a First-Year PGDM student (Batch 2026–28) actively seeking her first corporate summer/winter internship and entry-level opportunities in Finance and Business Management.\n\nHer resume does not list prior corporate experience, representing an authentic, fresh graduate profile eager to learn, adapt quickly, and contribute proactively to finance and analytical operations.`,
      sourceSection: 'Internship Experience Status',
      suggestedFollowUps: [
        'What are her strengths?',
        'What is her educational background?',
        'How can I get in touch with her?'
      ]
    };
  }

  // 6. Languages / Communication
  if (
    query.includes('language') ||
    query.includes('speak') ||
    query.includes('english') ||
    query.includes('hindi') ||
    query.includes('marathi')
  ) {
    const langs = RESUME_DATA.languages
      .map((l) => `• ${l.language} (${l.proficiency})`)
      .join('\n');
    return {
      answer: `Nirjara is multilingual and proficient in 3 languages:\n\n${langs}\n\nThis enables clear, culturally agile communication across regional and national business environments.`,
      sourceSection: 'Languages Known',
      suggestedFollowUps: [
        'What are her personal interests?',
        'What are her communication skills?',
        'What is her educational background?'
      ]
    };
  }

  // 7. Personal Interests / Hobbies / Anchoring / Novels / Music
  if (
    query.includes('interest') ||
    query.includes('hobby') ||
    query.includes('hobbies') ||
    query.includes('anchor') ||
    query.includes('novel') ||
    query.includes('book') ||
    query.includes('music') ||
    query.includes('song') ||
    query.includes('free time')
  ) {
    const interests = RESUME_DATA.personalInterests
      .map((i) => `• ${i.interest}: ${i.detail}`)
      .join('\n');
    return {
      answer: `Nirjara's personal interests highlighted in her resume:\n\n${interests}\n\nHer interest in anchoring highlights strong stage confidence, poise, and public communication skills.`,
      sourceSection: 'Personal Interests',
      suggestedFollowUps: [
        'What are her core competencies?',
        'What is her career objective?',
        'How can I contact her?'
      ]
    };
  }

  // 8. Overview / About / Intro / Summary
  if (
    query.includes('about') ||
    query.includes('who is') ||
    query.includes('introduce') ||
    query.includes('summary') ||
    query.includes('profile') ||
    query.includes('background') ||
    query.includes('overview')
  ) {
    return {
      answer: `Here is the verified summary of Nirjara Vijaykumar Chavan:\n\n"${RESUME_DATA.aboutMe}"\n\n• Current Status: 1st Year PGDM (2026-28) at IMDR Pune\n• Background: Commerce graduate from Swaraj College, Pune\n• Domain Focus: Finance & Business Management\n• Key Attributes: Responsible, adaptable, quick learner with a positive attitude.`,
      sourceSection: 'About Me & Profile Summary',
      suggestedFollowUps: [
        'What is her educational background?',
        'What are her technical skills?',
        'What are her contact details?'
      ]
    };
  }

  // 9. Why Hire / Strengths / Fit
  if (
    query.includes('why hire') ||
    query.includes('strength') ||
    query.includes('why should we') ||
    query.includes('value') ||
    query.includes('recruit')
  ) {
    return {
      answer: `Top reasons to consider Nirjara Chavan for finance/business internships:\n\n1. Strong Academic Track Record: 87% in HSC, 78% in CBSE, and admission to prestigious IMDR Pune.\n2. Finance & Commerce Grounding: Solid understanding of core financial concepts and balance sheets.\n3. Public Speaking & Poise: Experience in anchoring, showing articulate communication and composure.\n4. High Learning Agility: Dedicated quick learner eager to gain hands-on industry exposure and deliver value.`,
      sourceSection: 'Competencies & Academic Trajectory',
      suggestedFollowUps: [
        'What is her career objective?',
        'What are her technical skills?',
        'How to arrange an interview?'
      ]
    };
  }

  // 10. Default / Unmentioned specific check
  return {
    answer: `Based on Nirjara Chavan's official resume:\n\nShe is a First-Year PGDM student (Batch 2026–28) at Deccan Education Society's IMDR Pune with a Commerce background, focusing on Finance and Business Management.\n\nHer verified details include:\n• Objective: ${RESUME_DATA.careerObjective}\n• Technical Skills: ${RESUME_DATA.technicalSkills.join(', ')}\n• Competencies: ${RESUME_DATA.competencies.join(', ')}\n• Education: IMDR Pune (PGDM), Swaraj College (B.Com - 6.84), Sanjay Ghodawat JC (HSC - 87%), SOU Vijayadevi Yadav School (CBSE - 78%)\n• Contact: ${RESUME_DATA.personalInfo.email} | +91 ${RESUME_DATA.personalInfo.phone}\n\n(Note: If you asked about a specific tool or corporate role not listed above, it is not recorded on her resume.)`,
    sourceSection: 'Resume Summary & Verified Records',
    suggestedFollowUps: [
      'What are her academic scores?',
      'What technical skills does she have?',
      'How can I contact Nirjara?'
    ]
  };
}
