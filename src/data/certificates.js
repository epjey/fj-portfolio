/**
 * Verified SoloLearn course completions, not professional certifications.
 *
 * `issueDate` is stored as YYYY-MM-DD and shown with its day.
 * Keep certificate images in public/certificates/ and set `image` to a local
 * path such as /certificates/credential-file.webp.
 * Optional `type` values are `certification` and `course`; `featured` is
 * reserved for future use and is not integrated into the Home page here.
 */
export const certificates = [
  {
    id: 'sololearn-introduction-cpp',
    title: 'Introduction to C++',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2024-11-29',
    credentialId: 'CC-RM0MAEC2',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-RM0MAEC2',
    image: '/certificates/sololearn-introduction-cpp.webp',
    imageAlt: 'SoloLearn course certificate for Introduction to C++',
  },
  {
    id: 'sololearn-prompt-engineering',
    title: 'Prompt Engineering',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2025-01-07',
    credentialId: 'CC-DBLYLHAK',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-DBLYLHAK',
    image: '/certificates/sololearn-prompt-engineering.webp',
    imageAlt: 'SoloLearn course certificate for Prompt Engineering',
  },
  {
    id: 'sololearn-social-media-marketing-ai',
    title: 'Social Media Marketing with AI',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2025-01-15',
    credentialId: 'CC-66XTY6WI',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-66XTY6WI',
    image: '/certificates/sololearn-social-media-marketing-ai.webp',
    imageAlt: 'SoloLearn course certificate for Social Media Marketing with AI',
  },
  {
    id: 'sololearn-introduction-html',
    title: 'Introduction to HTML',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2025-02-20',
    credentialId: 'CC-EJNB395R',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-EJNB395R',
    image: '/certificates/sololearn-introduction-html.webp',
    imageAlt: 'SoloLearn course certificate for Introduction to HTML',
  },
  {
    id: 'sololearn-introduction-css',
    title: 'Introduction to CSS',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2025-03-24',
    credentialId: 'CC-ADYWI72P',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-ADYWI72P',
    image: '/certificates/sololearn-introduction-css.webp',
    imageAlt: 'SoloLearn course certificate for Introduction to CSS',
  },
  {
    id: 'sololearn-introduction-javascript',
    title: 'Introduction to JavaScript',
    issuer: 'SoloLearn',
    type: 'course',
    issueDate: '2025-05-16',
    credentialId: 'CC-YZSRTOB6',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-YZSRTOB6',
    image: '/certificates/sololearn-introduction-javascript.webp',
    imageAlt: 'SoloLearn course certificate for Introduction to JavaScript',
  },
]
