/**
 * @param {string} mode
 * @param {string} initMessage
 * @param {string} errorMessage
 * @param {number} Nline
 * @returns {string}
 */
const loggerHelper = function(mode,initMessage, errorMessage, Nline) {
  if(mode === "DEBUG") {
    console.debug(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "ERROR") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "WARN") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else {
    return new Error('Wrong mode for your debugging');
  }
}

/**
 * @param { function } fnc
 * @param {string} name
 */
const TimeOfRunning = function(fnc, name) {
  if(typeof fnc === "function" && typeof name === "string") {
    (function() {
      console.time(`${name}`);
      fnc();
      console.timeEnd(`${name}`);
    })();
  } else {
    return new TypeError('Arguments errors');
  }
}




