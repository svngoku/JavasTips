// @ts-check
/**
 * @param { string } sParam
 */
const GetURLParameter = function(sParam){
  if(typeof sParam === 'string') {
    const sPgeURL = window.location.search.substring(1);
    const sURLVariables = sPgeURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++){
      let sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) return sParameterName[1];
    }
  } else {
    return new TypeError('Argument must be a string')
  }
};


export default {
  GetURLParameter
}
