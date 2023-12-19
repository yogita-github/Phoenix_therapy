import React from 'react';
import { WebView } from 'react-native-webview';

function Varnasgame() {
  return (
    <WebView
      // source={{ uri: 'https://chat.openai.com/c/3704d655-7144-4145-89a7-48b33caae49f' }}
      source={{
        uri: "https://wordwall.net/embed/7635f78599844627b2565d87590a3cbb?themeId=1&templateId=22&fontStackId=0",
      }}
      style={{ flex: 1 }}
    />
  );
}

export default Varnasgame;