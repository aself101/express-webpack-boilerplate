// Generates a unique ID
export const generateGUID = () => {
  var d = new Date().getTime();
  if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};


export const generateUID = () => {
  var d = new Date().getTime();
  if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
