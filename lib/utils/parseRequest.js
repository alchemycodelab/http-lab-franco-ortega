module.exports = rawRequest => {

  const stringyRequest = String(rawRequest);
  const splitRequest = stringyRequest.split(' ');
  const splitBody = splitRequest[4].split('\r\n');

  return {
    method: splitRequest[0],
    path: splitRequest[1],
    body: splitBody[2]
  };

};






// if(two[0] === 'GET' || two[0] === 'DELETE') {
//     return {
//       method: two[0],
//       path: two[1]
//     };
//   } else {
//     return {
//       method: two[0],
//       path: two[1],
//       body: three
//     };
//   }



//   console.log(rawRequest);

//   const stringRequest = rawRequest.toString();
//   const splitRequest = stringRequest.split(' ');

//   console.log('splitRequest:');
//   console.log(splitRequest);

//   const splitObject = stringRequest.split('/r/n/r/n');

//   console.log('Split Object: ' + splitObject);

//   const request = {
//     method: splitRequest[0],
//     path: splitRequest[1]
//   };



//   return request;
