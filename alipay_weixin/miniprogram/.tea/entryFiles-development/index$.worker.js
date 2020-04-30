if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../onekit/ui/button/button?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/checkbox/checkbox?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/icon/icon?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/map/map?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/video/video?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../page/tabBar/component/index?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/tabBar/API/index?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/events/events?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/share/share?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/action-sheet/action-sheet?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/alert/alert?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/animation/animation?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/canvas/canvas?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/card-pack/card-pack?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/choose-city/choose-city?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/choose-location/choose-location?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/confirm/confirm?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/contact/contact?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/date-picker/date-picker?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/option-menu/option-menu?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/download-file/download-file?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/file/file?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr/ocr?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-idcard-face/ocr-idcard-face?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-business-card/ocr-business-card?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-vehicle/ocr-vehicle?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-driver-license/ocr-driver-license?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-business-license/ocr-business-license?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-bank-card/ocr-bank-card?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-train-ticket/ocr-train-ticket?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-passport/ocr-passport?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-general/ocr-general?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-vehicle-plate/ocr-vehicle-plate?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/ocr-vin/ocr-vin?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-auth-code/get-auth-code?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-location/get-location?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-network-type/get-network-type?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-system-info/get-system-info?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-server-time/get-server-time?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-user-info/get-user-info?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-image-info/get-image-info?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/image/image?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/keyboard/keyboard?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/loading/loading?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/make-phone-call/make-phone-call?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/memory-warning/memory-warning?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/multi-level-select/multi-level-select?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/options-select/options-select?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/navigation-bar-loading/navigation-bar-loading?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/navigator/navigator?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/open-location/open-location?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/pull-down-refresh/pull-down-refresh?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/pay-sign-center/pay-sign-center?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/request/request?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/request-payment/request-payment?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/scan-code/scan-code?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/set-navigation-bar/set-navigation-bar?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/show-auth-guide/show-auth-guide?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/storage/storage?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/toast/toast?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/upload-file/upload-file?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/vibrate/vibrate?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/watch-shake/watch-shake?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/clipboard/clipboard?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/bluetooth/bluetooth?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/rsa/rsa?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/page-scroll-to/page-scroll-to?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/websocket/websocket?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/zm-credit-borrow/zm-credit-borrow?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/create-selector-query/create-selector-query?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/sdk-version/sdk-version?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/user-capture-screen/user-capture-screen?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/screen/screen?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/compress-image/compress-image?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/report-analytics/report-analytics?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/text-risk-identification/text-risk-identification?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/create-inner-audiocontext/create-inner-audiocontext?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/get-background-audio-manager/get-background-audio-manager?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/API/generate-image-from-code/generate-image-from-code?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-title-color/get-title-color?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/button/button?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/canvas/canvas?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/checkbox/checkbox?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/form/form?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/icon/icon?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/image/image?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/input/input?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/label/label?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/map/map?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/navigator/navigate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/navigator/redirect?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/navigator/reLaunch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/navigator/navigator?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/picker/picker?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/picker-view/picker-view?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/progress/progress?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/radio/radio?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/scroll-view/scroll-view?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/slider/slider?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/swiper/swiper?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/switch/switch?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/text/text?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/textarea/textarea?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/view/view?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/lifestyle/lifestyle?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/contact-button/contact-button?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/webview/webview?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/cover-view/cover-view?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/movable-view/movable-view?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/favorite/favorite?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/video/video?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
require('../../page/component/rich-text/rich-text?hash=0c54ca87cf9e2b99151a70db1629da7999b11f6b');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}