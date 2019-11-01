export function getParams(url) {
  let paramsList;
  // let hashLink;
  let res = {};
  if (url.indexOf('?') !== -1) {
    paramsList = url.split('?')[1];
    if (paramsList.indexOf('#') !== -1) {
      // hashLink = paramsList.split('#')[1];
      paramsList = paramsList.split('#')[0];
    }
    paramsList = paramsList.split('&');
    paramsList.forEach(i => {
      res[i.split('=')[0]] = i.split('=')[1];
    });
    return res;
  } else {
    return null;
  }
}

// const link = 'http://www.alfxjx.club/?loginRes=true&username=Alfxjx&openId=28646799&avatar=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F28646799%3Fv%3D4&_id=5c76328fade7a550cc0f8de3#/home';

// console.log(getParams(link));

// const res = {
//   loginRes: 'true',
//   username: 'Alfxjx',
//   openId: '28646799',
//   avatar: 'https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F28646799%3Fv%3D4',
//   _id: '5c76328fade7a550cc0f8de3',
// };
