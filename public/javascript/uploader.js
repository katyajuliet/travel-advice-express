
const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
  });
document.getElementById('upload').addEventListener('click', function() {
const myCustomLocale = {
"error!":              "Error!",
"done":                "Done",
"addAnotherFile":      "Add another file...",
"cancel":              "cancel",
"cancelled!":          "cancelled",
"continue":            "Continue",
"crop":                "Crop",
"finish":              "Finished",
"finishIcon":          true,
"maxSize":             "File size limit:",
"next":                "Next",
"orDragDropFile":      "...or drag and drop a file.",
"orDragDropFiles":     "...or drag and drop files.",
"pleaseWait":          "Please wait...",
"removed!":            "removed",
"remove":              "remove",
"skip":                "Skip",
//   "unsupportedFileType": "File type not supported.",
"uploadFile":          "Select a File",
"uploadFiles":         "Select Files"
}

  uploader
.open({
container: "body",           // "body" by default.
layout: "modal",             // "modal" by default. "inline" also supported.
 locale: myCustomLocale,      // EN_US by default. (See "Localization" section below.)
maxFileSizeBytes: 1024 ** 2, // Unlimited by default.
mimeTypes: ["image/jpeg"],   // Unrestricted by default.
multi: false,                // False by default.
onUpdate: files => {},       // Called each time the list of uploaded files change.
showFinishButton: true,      // Whether to show the "finish" button in the widget.
showRemoveButton: true,      // Whether to show the "remove" button next to each file.
styles: {
  colors: {
    primary: "#377dff",      // Primary color (e.g. buttons).
    active: "#528fff"        // Active/hover color (inferred from primary by default).
  },
  fontSizes: {
    base: 16                 // Base font size (px).
  }
},
// tags: ["profile_picture"],   // Requires an Upload.io account.
editor: {
  images: {
    crop: true,              // True by default.
    cropRatio: 4 / 3,        // width / height. undefined enables freeform (default).
    cropShape: "rect"        // "rect" (default) or "circ".
  }
},
})
.then(files => {
alert(JSON.stringify(files));
let img = document.createElement('img')
let imgdiv=document.querySelector('.container')
imgdiv.appendChild(img)
img.src = files[0].fileUrl
// img.src = JSON.stringify(files)
console.log(files)
console.log(files[0].fileUrl)
})
})