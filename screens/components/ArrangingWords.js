import React from 'react';
import { WebView } from 'react-native-webview';

function ArrangingWords() {
  return (
    <WebView
      // source={{ uri: 'https://chat.openai.com/c/3704d655-7144-4145-89a7-48b33caae49f' }}
      source={{ uri: 'https://wordwall.net/embed/a2d30328afd6423ba10d93e95e3d93d6?themeId=3&templateId=72&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen' }}
      style={{ flex: 1 }}
    />
  );
}

export default ArrangingWords;