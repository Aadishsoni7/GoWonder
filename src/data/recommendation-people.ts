import type { Person, Resource } from './types';

const spotifyHome = 'https://engineering.atspotify.com/2020/1/for-your-ears-only-personalizing-spotify-home-with-machine-learning';
const spotifyInterview = 'https://newsroom.spotify.com/2019-10-24/6-questions-and-answers-with-tony-jebara-vp-of-machine-learning/';
const spotifyDay = 'https://engineering.atspotify.com/2020/3/my-beat-tony-jebara';
const netflixHomepage = 'https://netflixtechblog.com/learning-a-personalized-homepage-aa8ec670359a';
const basilicoTalk = 'https://learn.scale.com/public/videos/trends-in-recommendation-and-personalization-at-netflix';

// These roles are dated to their primary sources, rather than asserted as current jobs.
// No portrait is assigned until its reuse rights can be established.
export const recommendationPeople: Person[] = [
  {
    id: 'tony-jebara',
    name: 'Tony Jebara',
    role: 'Recommendation researcher; Spotify machine learning leader in 2019 and 2020',
    location: 'New York, United States, in the 2020 profile',
    country: 'United States',
    personType: 'practitioner',
    shortStory: 'Tony studied machine learning in college. His later work helped Netflix and Spotify decide what to recommend to different people.',
    journeySummary: [
      'He began studying machine learning in college and later spent four years directing machine learning at Netflix, according to his 2019 Spotify interview.',
      'At Spotify, he described using listening data and experiments to personalise playlists and the Home page. He also plays guitar and writes songs.',
      'His 2020 workday profile includes meetings with engineers and product managers, technical strategy and inviting outside researchers to share ideas.'
    ],
    processContext: 'The work combines data, mathematical models, experiments and conversations with other teams. This is a historical account from 2019 and 2020.',
    articleUrl: spotifyInterview,
    officialSite: spotifyHome,
    sourceUrls: [spotifyInterview, spotifyHome, spotifyDay],
    connectedNodeIds: ['recommendation-systems', 'machine-learning', 'algorithms', 'experimentation', 'personalization', 'data-science'],
    verificationStatus: 'verified',
    sourceVerifiedAt: '2026-10-20',
    evidenceUrls: [spotifyInterview, spotifyHome, spotifyDay],
    evidenceType: 'First person employer interview and technical explanation',
    verificationBasis: 'Spotify directly identifies Tony and describes his recommendation, machine learning, data analysis and experimentation work. Historical job titles are dated.',
    portraitStatus: 'needs_review'
  },
  {
    id: 'justin-basilico',
    name: 'Justin Basilico',
    role: 'Netflix recommendation research and engineering leader in the 2021 talk',
    country: 'United States',
    personType: 'practitioner',
    shortStory: 'Justin works on a surprisingly human problem: helping someone find something they will enjoy watching. His published work explains how Netflix builds personalised homepages.',
    journeySummary: [
      'In 2015, he and Chris Alvino explained how Netflix selects, orders and evaluates the rows and videos on a personalised homepage.',
      'In a 2021 conference talk, he described leading a Netflix machine learning team after more than ten years at the company.',
      'He discusses testing models, studying feedback loops and checking whether the chosen measurements reflect what people actually enjoy.'
    ],
    processContext: 'Read the accessible introduction first. The later technical sections discuss models, ranking, data and experiments. The 2021 talk is an account of work at that time.',
    officialSite: netflixHomepage,
    articleUrl: basilicoTalk,
    portfolioUrl: 'https://research.netflix.com/research-area/recommendations',
    sourceUrls: [netflixHomepage, basilicoTalk],
    connectedNodeIds: ['recommendation-systems', 'machine-learning', 'algorithms', 'ranking', 'experimentation', 'personalization', 'data-science'],
    verificationStatus: 'verified',
    sourceVerifiedAt: '2026-10-20',
    evidenceUrls: [netflixHomepage, basilicoTalk],
    evidenceType: 'Coauthored employer technical article and first person conference talk',
    verificationBasis: 'The Netflix article and the conference transcript directly evidence personalised recommendations, ranking, machine learning, data evaluation and experimentation.',
    portraitStatus: 'needs_review'
  }
];

export const recommendationResources: Resource[] = [
  { id: 'spotify-personalization-tony', title: 'How Spotify makes your Home page personal', url: spotifyHome, type: 'article', source: 'Spotify Engineering, 2020' },
  { id: 'spotify-tony-interview', title: 'Meet Tony: music, machine learning and discovery', url: spotifyInterview, type: 'article', source: 'Spotify Newsroom, 2019' },
  { id: 'spotify-tony-workday', title: 'A workday with Tony Jebara', url: spotifyDay, type: 'article', source: 'Spotify Engineering, 2020' },
  { id: 'netflix-personalized-homepage', title: 'Who chooses the rows on your Netflix homepage?', url: netflixHomepage, type: 'article', source: 'Chris Alvino and Justin Basilico, Netflix TechBlog, 2015' },
  { id: 'netflix-basilico-talk', title: 'Justin explains recommendations at Netflix', url: basilicoTalk, type: 'video', source: 'Scale TransformX, 2021; video and transcript' },
  { id: 'netflix-basilico-wistia', title: 'Watch Justin explain Netflix recommendations', url: 'https://fast.wistia.com/embed/medias/0pagrk53f6', type: 'video', source: 'Official Scale conference embed, 2021' }
];
