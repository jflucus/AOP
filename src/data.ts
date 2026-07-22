// Program, outcome, and people content — sourced from the AOP PRD/FRD/Vision & Blueprint.

// Homepage scholar spotlights — short highlight cards linking to the full News & Events post.
export const spotlights = [
  {
    photo: '/news/davon-sneed-psal-2026.jpg',
    alt: 'Davon Sneed on the podium with his bronze medal at the PSAL Varsity City Championships',
    title: 'Davon Sneed, 3rd place, PSAL Varsity City Championships',
    blurb:
      "AOP scholar-athlete Davon Sneed earned a bronze medal in the 400m Hurdles at Icahn Stadium, competing for the Mott Haven Mavericks. It's proof of what mentorship, discipline, and our Athletic Excellence Institute build together.",
  },
  {
    photo: '/news/jennifer-bonilla-city-tech-2026.jpg',
    alt: 'Mentor Amauris Olivo and mentee Jennifer Bonilla at Gregorio Luperón High School for Science & Mathematics',
    title: 'Jennifer Bonilla is headed to City Tech for Radiologic Technology',
    blurb:
      'AOP mentee Jennifer Bonilla closed out her senior softball season batting .435 with 3 home runs, 16 RBIs, and 12 stolen bases, then hit .875 in the playoffs. This fall she continues her journey at New York City College of Technology.',
  },
];

export const outcomes = [
  {
    title: 'College Acceptance',
    icon: '🎓',
    summary:
      'Every AOP senior applies to a balanced list of best-fit colleges and is accepted to at least one affordable option.',
    detail:
      'We follow the intensive-advising model validated by randomized controlled trials: low advisor-to-student ratios, advising that begins before senior year and continues to and through college, and a deliberate focus on college “match,” which research shows drives degree completion.',
  },
  {
    title: 'Scholarship Attainment',
    icon: '💵',
    summary:
      'Every family completes the FAFSA and the full New York aid stack, and every scholar builds a scholarship pipeline beyond athletics.',
    detail:
      'FAFSA completion is one of the strongest predictors of college enrollment. We are honest with families, because only about 2% of high school athletes receive athletic scholarships. We use sport for discipline and differentiation while maximizing merit- and need-based aid as the real financial plan.',
  },
  {
    title: 'Career Readiness',
    icon: '💼',
    summary:
      'Every scholar progresses through a structured work-based learning continuum: awareness, exploration, and preparation.',
    detail:
      'Speakers and worksite tours, job shadows and mock interviews, resumes, internships, and industry credentials, mirroring the career-academy model whose randomized evaluation found sustained earnings gains lasting years beyond high school.',
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
      'Honest recruiting education for families about the ~2% reality.',
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
  role: 'Founder/CEO',
  bio: [
    'Joseph Flucus is an educator, mentor, coach, and youth advocate dedicated to preparing the next generation for success in college, careers, leadership, and life.',
    'For nearly two decades, Joseph has served students in New York City Public Schools, where he has built a reputation for developing young people both inside and outside the classroom. Throughout his career, he has taught science, led academic initiatives, mentored students, and coached football and track & field, helping student-athletes grow as scholars, competitors, and leaders.',
    'As Founder of Athletes of Promise Foundation (AOP Foundation), Joseph created the organization to address a challenge he witnessed repeatedly throughout his career: talented students often lacked access to the academic support, mentorship, college guidance, and financial aid knowledge needed to reach their full potential. He believes that while athletics can open doors, education, leadership, and character create lifelong opportunities.',
    'Joseph’s vision is to ensure that every student graduates with a personalized plan for life after high school, whether that path leads to a four-year university, community college, trade school, apprenticeship, military service, entrepreneurship, or a meaningful career aligned with their passions and talents.',
    'Under his leadership, AOP Foundation is committed to developing the whole student through four pillars: Academic Excellence, Athletic Development, Leadership & Character, and College & Career Success. The foundation partners with families, schools, mentors, and community organizations to provide opportunities that empower students to thrive academically, athletically, and personally.',
    'Joseph believes that every young person has untapped potential. Through mentorship, education, and opportunity, he is committed to helping students discover their promise, prepare for success, and lead lives of purpose and service.',
  ],
  quote: 'Success isn’t measured only by the games we win, it’s measured by the lives we impact.',
  photo: '/team/joe.jpg',
};

export const mentors: {
  slug: string;
  name: string;
  role: string;
  focus: string;
  photo?: string;
  bio?: string[];
}[] = [
  {
    slug: 'najee-ashbourne',
    name: 'Najee Ashbourne',
    role: 'Girls Flag Football Mentor',
    focus: 'Athletic Development · Character · Leadership',
    photo: '/team/najee.jpg',
  },
  {
    slug: 'ibrahima-badji',
    name: 'Ibrahima Badji',
    role: 'Career & College Readiness Coach',
    focus:
      'College Planning · Career Exploration · Scholarships & Financial Aid · Resume & Interview Prep · Goal Setting',
    photo: '/team/ibrahima.jpg',
  },
  {
    slug: 'andre-cohen',
    name: 'Andre Cohen',
    role: 'Speed & Conditioning Trainer',
    focus: 'Speed · Agility · Strength & Conditioning · Injury Prevention',
    photo: '/team/andre.jpg',
  },
  {
    slug: 'joseph-flucus',
    name: 'Joseph Flucus',
    role: 'Football & Track & Field Mentor',
    focus: 'Leadership · Academic Accountability · College Readiness',
    photo: '/team/joe.jpg',
  },
  {
    slug: 'jesus-medina',
    name: 'Jesus Medina',
    role: 'Career Readiness Coach',
    focus: 'Career Exploration · Resume & Interview Prep · Professional Skills · Goal Setting',
    photo: '/team/jesus.jpg',
  },
  {
    slug: 'amauris-olivo',
    name: 'Amauris Olivo',
    role: 'Girls Softball Mentor',
    focus: 'Leadership · Teamwork · Confidence',
    photo: '/team/amauris.jpg',
    bio: [
      'Amauris Olivo is an educator, coach, and mentor dedicated to empowering young people through education, athletics, and leadership development. He is entering his eighth year as a Physical Education teacher and has served as a Dean for the past four years, helping lead school safety, student discipline, and student support initiatives. He is also an active member of his school’s Crisis Team, Building Response Team, and RPET Team, collaborating to foster a safe, supportive, and inclusive learning environment.',
      'Amauris earned a Master of Education in Coaching and Sports Administration from Concordia University Texas and a Bachelor of Science from SUNY Cortland. Throughout his career, he has focused on expanding opportunities for students beyond the classroom. He founded his school’s softball program, which compiled an impressive 54–14 overall record and captured two division championships in its first five seasons. He also launched the school’s boys’ and girls’ cross-country program, creating new pathways for student-athletes to grow and compete.',
      'Outside of school, Amauris has coached baseball with several youth organizations and served as the Softball Director for the 2025 Future Stars Summer Camp at SUNY Purchase College. His coaching philosophy extends far beyond competition, emphasizing character, accountability, resilience, and teamwork.',
      'As a member of the AOP Foundation, Amauris is committed to helping student-athletes realize their full potential. He believes athletics provide a powerful platform for teaching lifelong values and preparing young people for success in college, careers, and life. His mission is to ensure every student he mentors gains the confidence, discipline, and leadership skills needed to become a successful adult and a positive force in their community.',
    ],
  },
  {
    slug: 'sabrina-saint-jour',
    name: 'Sabrina Saint Jour',
    role: 'Certified Mental Health Coach',
    focus: 'Mental Wellness · Emotional Resilience · Coping Skills',
    photo: '/team/sabrina.jpg',
  },
  {
    slug: 'tommy-valerio',
    name: 'Tommy Valerio',
    role: 'STEM Coach',
    focus: 'Science · Technology · Engineering · Math',
    photo: '/team/tommy.jpg',
  },
];

export const board: {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  bio?: string[];
}[] = [
  {
    slug: 'joseph-flucus-board',
    name: 'Joseph Flucus',
    role: 'Founder & CEO',
    photo: '/team/joe.jpg',
  },
  {
    slug: 'craig-joseph',
    name: 'Craig Joseph',
    role: 'Vice Chair',
    photo: '/team/craig.jpg',
  },
  {
    slug: 'tommy-valerio-board',
    name: 'Tommy Valerio',
    role: 'Board Chair',
    photo: '/team/tommy.jpg',
  },
  {
    slug: 'george-febles',
    name: 'George Febles',
    role: 'Secretary',
    photo: '/team/george.jpg',
    bio: [
      'George Febles is one of New York City’s most respected educators, coaches, and mentors, dedicating more than three decades to developing young people through education and athletics. As Head Track & Field Coach at Fordham Preparatory School since 1989, he has built one of the nation’s premier high school track and field programs by emphasizing character, teamwork, and long-term athlete development over short-term success.',
      'A graduate of Fordham University, George has spent his career teaching Social Studies, American History, and Economics while mentoring thousands of student-athletes. His philosophy is simple but powerful: every young person deserves the opportunity to grow, compete, and discover their potential. Under his leadership, Fordham Prep has produced 16 National Champions, 88 All-Americans, 11 CHSAA State Catholic Championships, 23 Archdiocesan Championships, 43 Bronx Championships, six New York City Mayor’s Cup titles, and numerous collegiate student-athletes.',
      'George’s impact extends well beyond championships. He is nationally recognized for building an inclusive program where athletes of every ability are encouraged to develop confidence, resilience, discipline, and leadership. His commitment to developing the whole person has become the hallmark of his coaching career and has influenced generations of students, coaches, and educators.',
      'His contributions to the sport have earned some of the highest honors in high school athletics, including induction into the CHSAA Hall of Fame, The Armory Coaches Hall of Fame, and recognition as the National Scholastic Athletics Foundation’s Mike Byrnes Coach of the Year, honoring his lifetime of excellence in coaching, mentorship, and service.',
      'As a member of the AOP Foundation Board of Directors, George brings unparalleled experience in youth development, educational leadership, and athletic excellence. His lifelong commitment to helping young people realize their potential perfectly reflects the Foundation’s mission of empowering student-athletes through education, mentorship, and opportunity. His guidance strengthens AOP Foundation’s ability to inspire future leaders, build character, and create lasting opportunities for the next generation.',
    ],
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

// The AOP Scholar-Athlete Success Model — one signature program, seven integrated phases.
export const successModel = [
  {
    n: 1,
    slug: 'school-partnership',
    name: 'School Partnership',
    summary: 'AOP partners with schools that share a commitment to expanding opportunities for students.',
    points: [
      'The school appoints an AOP Site Coordinator.',
      'Teachers, coaches, counselors, and administrators nominate staff members interested in serving as mentors.',
      'Mentors complete AOP training before working with students.',
    ],
  },
  {
    n: 2,
    slug: 'student-recruitment',
    name: 'Student Recruitment',
    summary: 'Students are identified through coaches, counselors, teachers, administrators, and self-referral.',
    points: [
      'Applicants complete an application, essay, and transcript, with two recommendations, family information, athletic goals, and career interests.',
      'We prioritize students who demonstrate potential while facing barriers to opportunity, focusing on opportunity rather than defining students by deficits.',
    ],
  },
  {
    n: 3,
    slug: 'individual-success-plan',
    name: 'Individual Success Plan',
    summary: 'Every student completes assessments and builds a personalized annual development plan with their mentor.',
    points: [
      'Assessments span academic readiness, athletic development, leadership skills, mental wellness, college knowledge, career interests, financial literacy, and life skills.',
      'The mentor and student use the results to set goals and create a personalized annual plan.',
    ],
  },
  {
    n: 4,
    slug: 'mentorship-coaching',
    name: 'Mentorship & Coaching',
    summary: 'Each mentor supports three to four students year-round, with weekly check-ins.',
    points: [
      'Weekly check-ins cover grades, attendance, behavior, athletic goals, leadership development, and personal challenges.',
      'The mentor becomes the primary point of accountability, and a coach, advocate, and connector.',
    ],
  },
  {
    n: 5,
    slug: 'leadership-academy',
    name: 'Leadership Academy',
    summary: 'A structured curriculum across seven tracks, not isolated workshops.',
    tracks: [
      { name: 'Academic Excellence', items: ['Study skills', 'Time management', 'SAT/ACT preparation'] },
      { name: 'College Readiness', items: ['Applications', 'FAFSA', 'Scholarships', 'Campus visits'] },
      { name: 'Career Development', items: ['Resume writing', 'Interview skills', 'Networking', 'LinkedIn'] },
      { name: 'Leadership', items: ['Public speaking', 'Teamwork', 'Service learning'] },
      { name: 'Health & Wellness', items: ['Mental health', 'Nutrition', 'Recovery', 'Sports psychology'] },
      { name: 'Athletic Performance', items: ['Speed', 'Strength', 'Injury prevention', 'Recruiting education'] },
      { name: 'Financial Literacy', items: ['Budgeting', 'Credit', 'Investing', 'Entrepreneurship'] },
    ],
  },
  {
    n: 6,
    slug: 'opportunity-fund',
    name: 'Opportunity Fund',
    summary: 'Mentors request support so resources reach students fairly and consistently.',
    points: [
      'Requests can cover athletic equipment, tutoring, rehabilitation, transportation, college visits, enrichment experiences, testing fees, and leadership conferences.',
      'The mentor provides the rationale, and AOP reviews each request using clear criteria so resources are allocated fairly and consistently.',
    ],
  },
  {
    n: 7,
    slug: 'college-career-transition',
    name: 'College & Career Transition',
    summary: 'AOP supports each scholar through the move to college and career, and stays connected into the first year.',
    points: [
      'Application, financial aid, and decision support through senior year.',
      'Internships, summer employment, and industry credentials that build a real career on-ramp.',
      '"To-and-through" check-ins that continue into the first year after high school.',
    ],
  },
];

// Measurable outcomes by area — how AOP defines and reports success.
export const modelOutcomes = [
  { area: 'Academic', items: ['GPA improvement', 'Attendance', 'Graduation rate'] },
  { area: 'Athletic', items: ['Team participation', 'Athletic performance goals', 'College recruitment'] },
  { area: 'College', items: ['FAFSA completion', 'College applications', 'Scholarships earned'] },
  { area: 'Career', items: ['Summer employment', 'Internships', 'Certifications'] },
  { area: 'Leadership', items: ['Community service', 'Leadership roles', 'Public speaking'] },
];
