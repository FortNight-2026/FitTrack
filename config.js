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
  geminiBlob: "",

  // 2) SHARED CLOUD STORAGE (so users share one database, no setup for them)
  //    From your Firebase project: Web API key + Project ID
  firebase: {
    apiKey: "",
    projectId: ""
  },

  // 3) ADMIN CODE (lets you see & delete all profiles)
  //    Generated in: Shared storage → "Set admin code"
  adminCodeHash: ""
};
