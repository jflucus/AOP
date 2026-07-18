// Program, outcome, and people content — sourced from the AOP PRD/FRD/Vision & Blueprint.

export const outcomes = [
  {
    title: 'College Acceptance',
    icon: '🎓',
    summary:
      'Every AOP senior applies to a balanced list of best-fit colleges and is accepted to at least one affordable option.',
    detail:
      'We follow the intensive-advising model validated by randomized controlled trials: low advisor-to-student ratios, advising that begins before senior year and continues to and through college, and a deliberate focus on college “match” — the factor research shows drives degree completion.',
  },
  {
    title: 'Scholarship Attainment',
    icon: '💵',
    summary:
      'Every family completes the FAFSA and the full New York aid stack, and every scholar builds a scholarship pipeline beyond athletics.',
    detail:
      'FAFSA completion is one of the strongest predictors of college enrollment. We treat athletics honestly — only about 2% of high school athletes receive athletic scholarships — so we use sport for discipline and differentiation while maximizing merit- and need-based aid as the real financial plan.',
  },
  {
    title: 'Career Readiness',
    icon: '💼',
    summary:
      'Every scholar progresses through a structured work-based learning continuum: awareness, exploration, and preparation.',
    detail:
      'Speakers and worksite tours, job shadows and mock interviews, resumes, internships, and industry credentials — mirroring the career-academy model whose randomized evaluation found sustained earnings gains lasting years beyond high school.',
  },
];

export const programs = [
  {
    slug: 'academic-success-academy',
    name: 'Academic Success Academy',
    drives: 'College Acceptance',
    icon: '📚',
    tagline: 'Rigorous academics and college-prep coursework.',
    points: [
      'Minimum 2 sessions/week tutoring & homework support tied to school transcripts.',
      'Individualized academic plans led by a credentialed education lead.',
      'SAT/ACT prep embedded junior year with free/low-cost tools and practice tests.',
      'Course-selection guidance to keep scholars college-eligible (Regents/advanced courses).',
      'NCAA core-course GPA tracking for recruiting-track scholars.',
    ],
  },
  {
    slug: 'athletic-excellence-institute',
    name: 'Athletic Excellence Institute',
    drives: 'Engagement, Character & Admissions Leverage',
    icon: '🏈',
    tagline: 'Athletic development built on positive youth development.',
    points: [
      'Structured coaching in our founding sports by mentors trained in positive youth development.',
      'Participation conditioned on academic engagement.',
      'Honest recruiting education for families — the ~2% reality.',
      'Recruiting-track support where warranted: highlight film, coach outreach, eligibility registration.',
      'Equipment provided so cost is never a barrier.',
    ],
  },
  {
    slug: 'college-career-success-center',
    name: 'College & Career Success Center',
    drives: 'College Acceptance + Scholarship Attainment',
    icon: '🧭',
    tagline: 'One named advisor, to and through college.',
    points: [
      'A named advisor per scholar from 10th grade; intensive support in 11th–12th.',
      'Balanced college lists (reach/match/likely) chosen for affordability and fit.',
      '100% FAFSA completion goal with family completion nights and verification support.',
      'NY aid stack: FAFSA → TAP → Excelsior → HEOP/EOP/SEEK → DREAM Act pathways.',
      'Scholarship search calendar and award-letter comparison workshops.',
    ],
  },
  {
    slug: 'leadership-institute',
    name: 'Leadership Institute',
    drives: 'Career Readiness',
    icon: '⭐',
    tagline: 'A work-based learning continuum for every grade band.',
    points: [
      'Awareness (grades 6–9): speakers, worksite tours, career fairs.',
      'Exploration (10–11): job shadows, informational interviews, mock interviews, resume/LinkedIn.',
      'Preparation (11–12): paid internships, industry credentials, and SYEP linkage.',
      'Leadership curriculum: youth voice, service projects, public speaking, financial literacy.',
      'Employer partnership pipeline with signed MOUs (target: 5+ partners in Year 1).',
    ],
  },
];

export const founder = {
  name: 'Joseph Flucus',
  role: 'Founder & Board Chair',
  bio: [
    'Joseph Flucus is an educator, mentor, coach, and youth advocate dedicated to preparing the next generation for success in college, careers, leadership, and life.',
    'For nearly two decades, Joseph has served students in New York City Public Schools, where he has built a reputation for developing young people both inside and outside the classroom. Throughout his career, he has taught science, led academic initiatives, mentored students, and coached football and track & field, helping student-athletes grow as scholars, competitors, and leaders.',
    'As Founder of Athletes of Promise Foundation (AOP Foundation), Joseph created the organization to address a challenge he witnessed repeatedly throughout his career: talented students often lacked access to the academic support, mentorship, college guidance, and financial aid knowledge needed to reach their full potential. He believes that while athletics can open doors, education, leadership, and character create lifelong opportunities.',
    'Joseph’s vision is to ensure that every student graduates with a personalized plan for life after high school — whether that path leads to a four-year university, community college, trade school, apprenticeship, military service, entrepreneurship, or a meaningful career aligned with their passions and talents.',
    'Under his leadership, AOP Foundation is committed to developing the whole student through four pillars: Academic Excellence, Athletic Development, Leadership & Character, and College & Career Success. The foundation partners with families, schools, mentors, and community organizations to provide opportunities that empower students to thrive academically, athletically, and personally.',
    'Joseph believes that every young person has untapped potential. Through mentorship, education, and opportunity, he is committed to helping students discover their promise, prepare for success, and lead lives of purpose and service.',
  ],
  quote: 'Success isn’t measured only by the games we win — it’s measured by the lives we impact.',
  photo: '/team/joe.jpg',
};

export const mentors: {
  name: string;
  role: string;
  focus: string;
  photo?: string;
}[] = [
  {
    name: 'Joseph Flucus',
    role: 'Football & Track & Field Mentor',
    focus: 'Leadership · Academic Accountability · College Readiness',
  },
  {
    name: 'Amauris Olivo',
    role: 'Girls Softball Mentor',
    focus: 'Leadership · Teamwork · Confidence',
  },
  {
    name: 'Najee Ashbourne',
    role: 'Girls Flag Football Mentor',
    focus: 'Athletic Development · Character · Leadership',
    photo: '/team/najee.jpg',
  },
  {
    name: 'Ibrahima',
    role: 'Career & College Readiness Coach',
    focus:
      'College Planning · Career Exploration · Scholarships & Financial Aid · Resume & Interview Prep · Goal Setting',
  },
  {
    name: 'Andre Cohen',
    role: 'Speed & Conditioning Trainer',
    focus: 'Speed · Agility · Strength & Conditioning · Injury Prevention',
    photo: '/team/andre.jpg',
  },
  {
    name: 'Jesus Medina',
    role: 'Career Readiness Coach',
    focus: 'Career Exploration · Resume & Interview Prep · Professional Skills · Goal Setting',
    photo: '/team/jesus.jpg',
  },
];

export const values = [
  ['Promise', 'We see and invest in the potential of every young person.'],
  ['Preparation', 'Effort, dosage, and multi-year commitment drive outcomes.'],
  ['Purpose', "We connect today's work to each student's long-term goals."],
  ['Honesty', 'We tell families the truth about recruiting odds, costs, and aid.'],
  ['Equity & Access', 'We remove the cost, information, and network barriers.'],
  ['Integrity & Safety', 'Rigorous youth-protection and transparent stewardship.'],
  ['Evidence', 'We adopt practices validated by rigorous research and measure what matters.'],
  ['Family & Community', 'We partner with families and neighborhoods, not around them.'],
];
