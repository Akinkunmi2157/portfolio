// Add a project by adding an object. Images go in /public/projects.
export const projects = [
  {
    id: 'haven-wholeness',
    title: 'Haven Wholeness',
    type: 'Client project',
    summary: 'A learning platform for a youth development foundation.',
    image: '/projects/haven-wholeness.jpg',
    problem:
      'Teenagers face big transitions, like leading as school prefects, preparing for university and learning to handle money, often without structured guidance on character, identity and life skills. The foundation had programmes to offer but no online home to reach young people.',
    solution:
      'I designed and built a learning platform where teenagers can sign up for free, work through structured courses at their own pace and read practical articles on identity, wellbeing and leadership.',
    highlights: [
      'Three programmes: prefect leadership, university preparation and a growth & money mindset course',
      'Course lessons with written, video and downloadable material, plus progress tracking',
      'User accounts, an articles section and newsletter sign-up',
      'Warm, calm, mobile-first design matched to the foundation’s audience',
    ],
    role: 'Solo: design, development & deployment',
    stack: ['JavaScript', 'Vercel'], // add the rest of the stack you used here
    live: 'https://heaven-wholeness.vercel.app/',
    code: null, // private client repository
  },
  {
    id: 'study-companion',
    title: 'Digital Study Companion',
    type: 'Personal project',
    summary: 'A focused study workspace that keeps students honest.',
    image: '/projects/study-companion.jpg',
    problem:
      'Students keep notes, videos and links in one place, to-do lists in another and a timer on their phone. It’s easy to “study” for an hour without really focusing, and there’s no clear picture of real progress.',
    solution:
      'I built one workspace that brings study materials, tasks and focus time together, with an integrity mode that checks focus sessions are genuine, so the progress stats actually mean something.',
    highlights: [
      'Pomodoro-style timer with integrity mode: presence checks, auto-pause on tab switch, reflections and a comprehension quiz',
      'Study library for documents, videos and links, with an “Ask Tutor” assistant',
      'Kanban task board with priorities and due dates',
      'Dashboard with streaks, focus time and weekly activity; full auth with email verification',
    ],
    role: 'Solo: design & development',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Vercel'],
    live: 'https://study-companion-nu.vercel.app/',
    code: 'https://github.com/Akinkunmi2157/Study-Companion',
  },
]
