chrome.app.runtime.onLaunched.addListener(() => {
  let screenWidth = screen.availWidth;
  let screenHeight =  screen.availHeight;

  let b = {
      width: Math.round(screenWidth * 1/3),
      height: Math.round(screenHeight),
      left: Math.round(screenWidth),
      top: Math.round(screenHeight)
    };

  chrome.app.window.create('index.html', {
    id: "keyboardWinID",
    outerBounds: b
  });
})
