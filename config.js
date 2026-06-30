// ════════════════════════════════════════════════════════════════
//  FitTrack configuration  (edit this file in your GitHub repo)
// ════════════════════════════════════════════════════════════════
//
// Everything here is OPTIONAL. The app works locally with no config.
// Fill these in to enable shared features. The app's owner generates
// each value from inside the app (AI settings / Shared storage pages)
// and pastes the result here.
//
window.FITTRACK_CONFIG = {

  // 1) SHARED GEMINI KEY (so users don't need their own AI key)
  //    Generated in: AI settings → "Owner: share your key"
  geminiBlob: "r9uq9HWSpg1gcBrxGiMIAh6J5TJFcAuEzjrb2qk3Ok7HZv8VIjqBMhue/SrHjSTxvTKjLmwDCV4yz9CG7uY3SsavL6S10HUVcMspc/QZkX16c/fknyEoSrVCw8lO21J6Uw==",

  // 2) SHARED CLOUD STORAGE (so users share one database, no setup for them)
  //    From your Firebase project: Web API key + Project ID
  firebase: {
    apiKey: "AIzaSyDfXizkyUcYPsAqJ7ClsQEZHpkCP1N35ZQ",
    projectId: "fittrack-fy26"
  },

  // 3) ADMIN CODE (lets you see & delete all profiles)
  //    Generated in: Shared storage → "Set admin code"
  adminCodeHash: "1133226599cc17c8b4ee08a06e05ba8dcd31d4a7539a4b4198ef6f1bb77b3d64"
};
