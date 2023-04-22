import * as React from "react";
import { WebView } from "react-native-webview";
// import * as Notifications from "expo-notifications";

export default function App() {
  //eas build -p android  >>>>.abb 명령어
  //eas build -p android --profile preview >>> .apk 명령어

  // React.useEffect(() => {
  //   async function requestPermissionsAsync() {
  //     const { granted } = await Notifications.requestPermissionsAsync();
  //     if (!granted) {
  //       alert("알림 권한이 필요합니다.");
  //     }
  //   }
  //   requestPermissionsAsync();
  // }, []);

  // // 알림 등록
  // function scheduleNotification() {
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "알람",
  //       body: "알람이당",
  //     },
  //     trigger: {
  //       seconds: 10,
  //     },
  //   });
  // }

  // // 웹뷰 메시지 수신 이벤트 핸들러
  // function handleWebViewMessage(event) {
  //   const data = event.nativeEvent.data;
  //   if (data === "scheduleNotification") {
  //     scheduleNotification();
  //   }
  // }

  return (
    <WebView
      source={{
        uri: "https://shdomi8599.github.io/mobile-to-do-app/",
      }}
      // onMessage={handleWebViewMessage} // 웹뷰 메시지 수신 이벤트 핸들러 등록
      // javaScriptEnabled={true} // 웹뷰에서 자바스크립트 실행을 허용
    />
  );
}
