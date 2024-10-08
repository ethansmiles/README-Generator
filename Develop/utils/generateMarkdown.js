// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD 3-Clause') {
    return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'BSD 3-Clause') {
    return 'Licensed with BSD 3-Clause';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  $(renderLicenseBadge)
  $(renderLicenseLink)
  $(renderLicenseSection)
  ## Github Username
  ${data.github}
  ## Email
  ${data.email}
`;
}

export default generateMarkdown;
