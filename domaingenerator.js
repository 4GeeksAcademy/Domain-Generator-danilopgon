/* eslint-disable no-console */

const PRONOUNS = ["the", "our", "my", "your"];
const ADJECTIVES = ["great", "big", "last", "best"];
const NOUNS = ["jogger", "racoon", "boxes", "sitcom"];
const EXTENSIONS = ["es", "com", "net", "org"];

const getDomain = () => {
  let domainNames = [];
  let fullDomainName = "";

  for (let pronoun of PRONOUNS) {
    for (let adj of ADJECTIVES) {
      for (let noun of NOUNS) {
        for (let domain of EXTENSIONS) {
          fullDomainName = `${pronoun}${adj}${noun}.${domain}`;
          domainNames.push(fullDomainName);
        }
      }
    }
  }

  return domainNames;
};

const getDomainHack = (arrayOfDomains) => {
  let domainHackedArray = arrayOfDomains.filter((domainName) => {
    domainName = domainName.split(".");
    let extensionLength = domainName[1].length;

    if (domainName[0].endsWith(domainName[1])) {
      domainName[0] = domainName[0].slice(0, -extensionLength);
      domainHackedArray.push(`${domainName[0]}.${domainName[1]}`);
    } else {
      domainHackedArray.push(`${domainName[0]}.${domainName[1]}`);
    }
  });

  return domainHackedArray;
};

console.log(getDomainHack(getDomain()));
