import CanvasContext from "./api/CanvasContext"
import VideoContext from "./api/VideoContext"
import Context from "./api/Context"
import wx_cloud from "./my.cloud"
import onekit from "./onekit"
export default class my {
  static triggerEvent(THIS, eventName, data) {
    eventName = onekit.firstUpper(eventName);
    return THIS.props["on" + eventName](data);
  }
  /////////////////// animation //////////////////////////
  static createAnimation(object) {
    return wx.createAnimation(object);
  }

  ///////////////// basic ////////////////////////////////
  static canIUse(string) { return wx.canIUse(string); }
  static getSystemInfo(object) { return wx.getSystemInfo(object); }
  static getSystemInfoSync(object) { return (wx.getSystemInfoSync(object)); }
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }
  static getUpdateManager(object) { return wx.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return wx.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return wx.offPageNotFound(object); }
  static onPageNotFound(object) { return wx.onPageNotFound(object); }
  static offError(object) { return wx.offError(object); }
  static onError(object) { return wx.onError(object); }
  static offAppShow(object) { return wx.offAppShow(object); }
  static onAppShow(object) { return wx.onAppShow(object); }
  static offAppHide(object) { return wx.offAppHide(object); }
  static onAppHide(object) { return wx.onAppHide(object); }
  static setEnableDebug(object) { return wx.setEnableDebug(object); }
  static getLogManager(object) { return wx.getLogManager(object); }
  static rsa(Object) { return /*wx.esa(object)*/ console.log("暂不支持"); }
  /////////////////// Canvas ///////////////////
  static drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = wx.createCanvasContext(id);
    for (var action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle(onekit.color.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data)
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data)
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath()
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke()
          break
        case "fillPath":
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill()
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();
  }
  static createContext() {
    var context = new Context();
    return context;
  }
  static createCanvasContext(id) {
    return new CanvasContext(wx.createCanvasContext(id));
  }
  static createVideoContext(videoId) {
    return new VideoContext(wx.createVideoContext(videoId));
  }
  static canvasToTempFilePath(object) {
    var object2 = {
      canvasId: object.canvasId
    }
    object2.success = function (res) {
      var result = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: res.apFilePath
      };
      if (object.success) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.canvasToTempFilePath(object2);
  }
  static canvasPutImageData(object) { return wx.canvasPutImageData(object) };
  static canvasGetImageData(object) { return wx.canvasGetImageData(object) };
  ////////////// Device //////////////////
  static onBeaconServiceChange(object) { return wx.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return wx.onBeaconUpdate(object); }
  static getBeacons(object) { return wx.getBeacons(object); }
  static stopBeaconDiscovery(object) { return wx.stopBeaconDiscovery(object); }
  static startBeaconDiscovery(object) { return wx.startBeaconDiscovery(object); }
  static stopWifi(object) { return wx.stopWifi(object); }
  static startWifi(object) { return wx.startWifi(object); }
  static setWifiList(object) { return wx.setWifiList(object); }
  static onWifiConnected(object) { return wx.onWifiConnected(object); }
  static onGetWifiList(object) { return wx.onGetWifiList(object); }
  static getWifiList(object) { return wx.getWifiList(object); }
  static getConnectedWifi(object) { return wx.getConnectedWifi(object); }
  static connectWifi(object) { return wx.connectWifi(object); }
  static setNavigationBar(object) { return wx.setNavigationBarTitle(object); };
  //
  static onAccelerometerChange(callback) {
    wx.onAccelerometerChange(function (res) {
      if (wx._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  }
  static stopAccelerometer(object) {
    wx._stopAccelerometer = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startAccelerometer(object) {
    wx._stopAccelerometer = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static getBatteryInfoSync(object) { return wx.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) {
    wx.getSystemInfo({
      success: (res) => {
        var percent = res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        result.level = results
      }
    })
    return result;
  }
  static getBatteryInfo(object) {
    var object2 = {}
    object2.success = function (res) {
      var result = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      }
      result = wx._getBatteryInfo(result);
      if (object.success) { object.success(result); }
      if (object.fail) { object.fail(result); }
    },
      object2.fail = function (res) {
        if (object.success) { object.success(res); }
        if (object.fail) { object.fail(res); }
      }
    return wx.getSystemInfo(object2);
  }
  //
  static getClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
            object2["success"] = function (res) {
              object[key]({ text: res.data });
            };
            break;
          case "complete":
            object2["complete"] = function (res) {
              if (res.text) {
                res = { text: res.data };
              }
              object["complete"](res);
            };
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return wx.getClipboardData(object2);
  }
  static setClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "text":
            object2["data"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return wx.setClipboardData(object2);
  }
  static onCompassChange(callback) {
    wx.onCompassChange(function (res) {
      if (wx._stopCompass) {
        return;
      }
      callback(res); s
    });
  };
  static stopCompass(object) {
    wx._stopCompass = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static startCompass(object) {
    wx._stopCompass = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addPhoneContact(object) {
    var object2 = {};
    var errMsg;
    var result = {
      errMsg: errMsg
    }
    object2.success = function (res) {
      result.errMsg = "addPhoneContact:ok"
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      result.errMsg = "addPhoneContact:fail cancel"
      if (object.fail) {
        object["fail"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    return wx.addPhoneContact(object2);
  }
  static onGyroscopeChange(callback) {
    wx.onGyroscopeChange(function (res) {
      if (wx._stopGyroscope) {
        return;
      }
      callback(res);
    });
  }
  static stopGyroscope(object) {
    wx._stopGyroscope = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startGyroscope(object) {
    wx._startGyroscope = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  //
  static onDeviceMotionChange(object) { return wx.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return wx.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return wx.startDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return wx.startDeviceMotionListening(object); }
  //
  static getNetworkType = function (object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    object2.success = function (res) {
      var result = { networkType: my._network(res).networkType };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.getNetworkType(object2);
  }
  static _network = function (res) {
    var networkType;
    if (res.networkAvailable) {
      switch (res.networkType) {
        case "WWAN":
          networkType = "WIFI";
          break;
        default:
          networkType = res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange = function (callack) {
    wx.onNetworkStatusChange(function (res) {
      callack(wx._network(res));
    });
  }


  //
  static makePhoneCall = function (object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "number":
            object2["phoneNumber"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }

      return wx.makePhoneCall(object2);
    }
  }

  static scan = function (object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "hideAlbum":
            object2["onlyFromCamera"] = object[key];
            break;
          case "type":
            object2["scanType"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = {};
        if (res.result) {
          result.charSet = "UTF-8";
          result.result = res.result;
          if (res.qrCode) {
            result.scanType = "QR_CODE";
          } else if (res.barCode) {
            result.scanType = "EAN_8";
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return wx.scanCode(object2);
  }
  //
  static vibrate(object) { return console.log("此功能尚未开放") }
  static vibrateLong(object) {
    var object2 = {}
    object2.success = function (res) {
      var result = {
        errMsg: "vibrateLong:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return wx.vibrateLong(object2);
  }
  static vibrateShort(object) {
    var object2 = {}
    object2.success = function (res) {
      var result = {
        errMsg: "vibrateShort:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return wx.vibrateShort(object2);
  }
  //
  static onMemoryWarning(object) { return wx.onMemoryWarning(object); }
  static offMemoryWarning(callback) { return wx.offMemoryWarning(callback); }
  //
  static writeBLECharacteristicValue(object) { return wx.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return wx.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return wx.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return wx.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return wx.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return wx.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return wx.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return wx.createBLEConnection(object); }
  static closeBLEConnection(object) { return wx.closeBLEConnection(object); }
  static offBLECharacteristicValueChange(callback) { return wx.offBLECharacteristicValueChange(callback); }
  static offBluetoothAdapterStateChange(callback) { return wx.offBluetoothAdapterStateChange(callback); }
  static onBLEConnectionStateChanged(callback) { return wx.onBLEConnectionStateChanged(callback); }
  static offBLEConnectionStateChanged(callback) { return wx.offBLEConnectionStateChange(callback); }
  //
  static stopBluetoothDevicesDiscovery(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return wx.stopBluetoothDevicesDiscovery(object2);
  }
  static startBluetoothDevicesDiscovery(object) {
    return wx.openBluetoothAdapter(object)
  }
  static openBluetoothAdapter(object) {

    return wx.openBluetoothAdapter(object);
  }
  static onBluetoothDeviceFound(object) { return wx.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return wx.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return wx.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) {
    var object2 = {}
    object2.success = function (res) {
      wx.getBluetoothDevices({
        success: (res) => {
          // console.log("000", res)
          // console.log("000", res.devices)
          result.devices = res.devices
        }
      })
      var result = {
        errMsg: "closeBluetoothAdapter:ok"
      }
      if (object.success) { object["success"](result) }
      if (object.complete) { object["complete"](result) }
    }
    object2.fail = function (res) {
      if (object.success) { object["success"](res) }
      if (object.complete) { object["complete"](res) }
    }
    return wx.getBluetoothDevices(object2);
  }
  static getBluetoothAdapterState(object) { return wx.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { return wx.closeBluetoothAdapter(object); }
  //
  static connectBLEDevice(object) { return wx.createBLEConnection(object); }
  static disconnectBLEDevice(object) { return wx.closeBLEConnection(object) }
  //
  static stopHCE(object) { return wx.stopHCE(object); }
  static startHCE(object) { return wx.startHCE(object); }
  static sendHCEMessage(object) { return wx.sendHCEMessage(object); }
  static onHCEMessage(object) { return wx.onHCEMessage(object); }
  static getHCEState(object) { return wx.getHCEState(object); }
  //
  static setScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "brightness":
            object2["value"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return wx.setScreenBrightness(object2);
  }
  static setKeepScreenOn(object) { return wx.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return wx.onUserCaptureScreen(object); }
  static offUserCaptureScreen(callback) { return wx.offUserCaptureScreen(callback); }
  static watchShake(object) { return /*wx.watchShake*/console.log("暂不支持") }
  static getServerTime(object) { return /*wx.getServerTime*/console.log("暂不支持") }
  //
  static getScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var result = { brightness: res.value };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.getScreenBrightness(object2);
  }
  /////////////////// Ext //////////////
  static getExtConfigSync(object) { return wx.getExtConfigSync(object) }
  static getExtConfig(object) { return wx.getExtConfig(object) }
  //////////////////// File //////////
  static getFileSystemManager(object) { return wx.getFileSystemManager(object) }
  static getFileInfo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var res2 = { value: res.brightness };
      if (object.success) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    object2.fail = function (res) {
      var res2 = res;
      if (object.fail) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    return my.g(object2);
  }

  static removeSavedFile(object) { return wx.removeSavedFile(object) }
  static getSavedFileInfo(object) { return wx.getSavedFileInfo(object) }
  static getSavedFileList(object) { return wx.getSavedFileList(object) }
  static openDocument(object) { return wx.openDocument(object) }
  static saveFile(object) {
    wx.saveFile({
      tempFilePath: object.apFilePath,
      success(res) {
        var result = { savedFilePath: res.savedFilePath };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }, fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  //////////// Location ///////////////
  static openLocation(object) { return wx.openLocation(object) }
  static getLocation(object) { return wx.getLocation(object) }
  static chooseLocation(object) { return wx.chooseLocation(object) }
  ////////// Media ////////////////////
  static createMapContext(object) { return wx.createMapContext(object) }
  static compressImage(object) { return wx.compressImage(object) }
  static saveImage(object) { return wx.saveImageToPhotosAlbum(object) }
  static getImageInfo(object) { return wx.getImageInfo(object) }
  static previewImage(object) { return wx.previewImage(object) }
  static chooseImage(object) {
    if (object.count == 0) {
      object.count = 0;
    }
    wx.chooseImage({
      conut: object.count,
      sizeType: object.sizeType,
      sourceType: object.scourceType,
      success: (res) => {
        var apFilePaths = [];
        for (var path of res.tempFilePaths) {
          apFilePaths.push(path)
        }
        var result = {
          apFilePaths: apFilePaths,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  static saveVideoToPhotosAlbum(object) { return wx.saveVideoToPhotosAlbum(object) }
  static chooseVideo(object) { return wx.chooseVideo(object) }
  static createVideoContext(object) { return wx.createVideoContext(object) }
  static stopVoice(object) { return wx.stopVoice(object) }
  static pauseVoice(object) { return wx.pauseVoice(object) }
  static playVoice(object) { return wx.playVoice(object) }
  static setInnerAudioOption(object) { return wx.setInnerAudioOption(object) }
  static getAvailableAudioSources(object) { return wx.getAvailableAudioSources(object) }
  static createInnerAudioContext(object) { return wx.createInnerAudioContext(object) }
  static createAudioContext(object) { return wx.createAudioContext(object) }
  static onBackgroundAudioStop(object) { return wx.onBackgroundAudioStop(object) }
  static onBackgroundAudioPause(object) { return wx.onBackgroundAudioPause(object) }
  static onBackgroundAudioPlay(object) { return wx.onBackgroundAudioPlay(object) }
  static stopBackgroundAudio(object) { return wx.stopBackgroundAudio(object) }
  static seekBackgroundAudio(object) { return wx.seekBackgroundAudio(object) }
  static pauseBackgroundAudio(object) { return wx.pauseBackgroundAudio(object) }
  static playBackgroundAudio(object) { return wx.playBackgroundAudio(object) }
  static getBackgroundAudioPlayerState(object) { return wx.getBackgroundAudioPlayerState(object) }
  static getBackgroundAudioManager(object) { return wx.getBackgroundAudioManager(object) }
  static createLivePusherContext(object) { return wx.createLivePusherContext(object) }
  static startRecord(object) { return wx.startRecord(object) }
  static stopRecord(object) { return wx.stopRecord(object) }
  static getRecorderManager(object) { return wx.getRecorderManager(object) }
  //////////////// Network ///////////////
  static request(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "headers":
            object2["header"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = {
          headers: res.header
        };
        for (var key in object) {
          switch (key) {
            case "status":
              result["statusCode"] = res[key];
              break;
            case "headers":
              result["header"] = res[key];
              break;
            default:
              result[key] = res[key];
              break;
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return wx.request(object2);
  }

  static httpRequest(object) { return /*wx.httpRequest(object)*/console.log("暂不支持") }
  static downloadFile(object) {
    wx.downloadFile({
      url: object.url,
      header: object.header,
      success: object.success,
      fail: object.fail,
      complete: object.complete,
      success: (res) => {
        var apFilePath = "";
        for (var urls of res.tempFilePath) {
          apFilePath.url
        }
        var result = {
          apFilePath: apFilePath,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  }
  static uploadFile(object) {
    wx.uploadFile({
      url: object.url,
      filePath: object.filePath,
      name: object.fileName,
      fileType: "image",
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  };
  //
  static connectSocket(object) { return wx.connectSocket(object) }
  static onSocketError(object) { return wx.onSocketError(object) }
  static onSocketMessage(object) { return wx.onSocketMessage(object) }
  static onSocketClose(object) { return wx.onSocketClose(object) }
  static onSocketOpen(object) { return wx.onSocketOpen(object) }
  static sendSocketMessage(object) { return wx.sendSocketMessage(object) }
  static closeSocket(object) { return wx.closeSocket(object) }
  static offLocalServiceResolveFail(object) { return wx.offLocalServiceResolveFail(object) }
  static onLocalServiceResolveFail(object) { return wx.onLocalServiceResolveFail(object) }
  static offLocalServiceDiscoveryStop(object) { return wx.offLocalServiceDiscoveryStop(object) }
  static onLocalServiceDiscoveryStop(object) { return wx.onLocalServiceDiscoveryStop(object) }
  static offLocalServiceLost(object) { return wx.offLocalServiceLost(object) }
  static onLocalServiceLost(object) { return wx.onLocalServiceLost(object) }
  static offLocalServiceFound(object) { return wx.offLocalServiceFound(object) }
  static onLocalServiceFound(object) { return wx.onLocalServiceFound(object) }
  static stopLocalServiceDiscovery(object) { return wx.stopLocalServiceDiscovery(object) }
  static startLocalServiceDiscovery(object) { return wx.startLocalServiceDiscovery(object) }
  //
  static stopLocalServiceDiscovery(object) { return wx.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return wx.startLocalServiceDiscovery(object); }
  static onLocalServiceResolveFail(callback) { return wx.onLocalServiceResolveFail(callback); }
  static onLocalServiceLost(callback) { return wx.onLocalServiceLost(callback); }
  static onLocalServiceFound(callback) { return wx.onLocalServiceFound(callback); }
  static onLocalServiceDiscoveryStop(callback) { return wx.onLocalServiceDiscoveryStop(callback); }
  static offLocalServiceResolveFail(callback) { return wx.offLocalServiceResolveFail(callback); }
  static offLocalServiceLost(callback) { return wx.offLocalServiceLost(callback); }
  static offLocalServiceFound(callback) { return wx.offLocalServiceFound(callback); }
  static offLocalServiceDiscoveryStop(callback) { return wx.offLocalServiceDiscoveryStop(callback); }
  ///////// Open Interface //////////
  static _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60;
  }

  static getAuthCode = function (object) {
    var that = this;
    if (!object) {
      return wx.login(object);
    }
    var object2 = {
      scopes: "auth_user"
    };
    object2.success = function (res) {
      getApp().onekitwx._login = new Date().getTime();
      getApp().onekitwx._jscode = res.code;
      var result = { authCode: res.code };

      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(complete);
      }
      // if(!getApp().onekitwx.hasuserinfo){
      my._getUserInfo(result);
      // }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if (my._checkSession()) {
      object2.success({ code: getApp().onekitwx._jscode });
    } else {
      wx.login(object2);
    }

  };
  static getOpenUserInfo(object) {
    getApp().onekitwx.getuserinfo = (data, callback) => {
      console.log(data);
      //
      // { "response": { "code": "10000", "msg": "Success", "avatar": "https:\/\/tfs.alipayobjects.com\/images\/partner\/TB1domvbyRADuNkUuBbXXcvopXa", "city": "成都市", "countryCode": "CN", "gender": "m", "nickName": "安好", "province": "四川省" } }
      var gender;
      if (data.userInfo.gender == 1) {
        gender = "m"
      } else if (data.userInfo.gender == 2) {
        gender = "f";
      } else {
        gender = "t";
      }
      var res = {
        code: "10000",
        msg: "Success",
        avatar: data.userInfo.avatarUrl,
        city: data.userInfo.city,
        countryCode: "CN",
        gender: gender,
        nickName: data.userInfo.nickName,
        province: data.userInfo.province
      };
      var response = {
        response: res
      }
      var result = {
        response: JSON.stringify(response)
      };
      callback(res);
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  };

  static _getUserInfo(object) {
    getApp().onekitwx.getuserinfo = (data, callback) => {
      var code = getApp().onekitwx._jscode;
      var url = getApp().onekitwx.server + "userinfo";
      wx.request({
        url: url,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          code,
          data: JSON.stringify(data)
        },
        success(res) {
          console.log(res);
          // if(object.success){
          //   object.sccess(res);
          // }
          // if(object.complete){
          //   object.complete(res);
          // }
          callback();
        },
        fail(res) {
          // console.log(res);
          // if (object.fail) {
          //   object.fail(res);
          // }
          // if (object.complete) {
          //   object.complete(res);
          // }
          callback();
        }
      })

    }
    wx.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  };
  static getOpenData = function (object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekit.opendata = opendata;
      for (var cb = 0; cb < getApp().onekit.opendataCallbacks.length; cb++) {
        getApp().onekit.opendataCallbacks[cb](opendata);
      }
      getApp().onekit.opendataCallbacks = [];
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekit.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekit.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekit.opendata = {};
    wx.login({
      success(res) {
        var jscode = res.code;
        wx.getAuthUserInfo({
          success(res) {
            var url = getApp().onekit.server + "opendata";
            wx.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: res.nickName,
                avatarUrl: res.avatar,
                js_code: jscode
              },
              success(res) {
                success(res.data);
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber(object) {

    getApp().onekitwx.getphonenumber = (data, callback) => {
      console.log(data);
      var code = getApp().onekitwx._jscode;
      var url = getApp().onekitwx.server + "phonenumber";
      wx.request({
        url: url,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          code,
          encryptedData: data.encryptedData,
          iv: data.iv
        },
        success(res) {
          console.log(res);

          var result = {
            response: JSON.stringify(res.data)
          };
          if (object.success) {
            object.success(result);
          }
          if (object.complete) {
            object.complete(result);
          }
          callback();
        },
        fail(res) {
          console.log(res);
          if (object.fail) {
            object.fail(res);
          }
          if (object.complete) {
            object.complete(res);
          }
          callback();
        }
      })

    }
    wx.navigateTo({
      url: '/onekitwx/page/getphonenumber/getphonenumber'
    })
  };
  static navigateToMiniProgram(object) { return wx.navigateToMiniProgram(object) }
  static navigateBackMiniProgram(object) { return wx.navigateBackMiniProgram(object) }
  static getAccountInfoSync(object) { return wx.getAccountInfoSync(object) }

  static reportMonitor(object) { return wx.reportMonitor(object) }
  static reportAnalytics(object) { return wx.reportAnalytics(object) }
  static tradePay(object) {
    var trade_no = object.tradeNO;
    var url = getApp().onekitwx.server + "orderinfo";
    wx.request({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        trade_no
      },
      success(res) {
        console.log(res);
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success(res) {
            console.log(res);
            if (object.success) {
              object.success(res);
            }
            if (object.complete) {
              object.complete(res);
            }
          }
        })
      },
      fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    })

  };
  static authorize(object) { return wx.authorize(object) }
  static openSetting(object) { return wx.openSetting(object) }
  static getSetting(object) { return wx.getSetting(object) }
  static chooseAddress(object) { return wx.chooseAddress(object) }
  static openCard(object) {
    wx.openCardList();
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addCard = function (object) {
    var url = getApp().onekit.server + "addcard";
    wx.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(object.cardList),
        js_code: object.jscode
      },
      success(res) {
        var data = res.data;
        if (object.success) {
          object.success(data);
        }
        if (object.complete) {
          object.complete(data);
        }
      }, fail(res) {
        console.log(res.data);
      }
    });
  }
  static chooseInvoiceTitle(object) { return wx.chooseInvoiceTitle(object) }
  static chooseInvoice(object) { return wx.chooseInvoice(object) }
  static startSoterAuthentication(object) { return wx.startSoterAuthentication(object) }
  static checkIsSupportSoterAuthentication(object) { return wx.checkIsSupportSoterAuthentication(object) }
  static checkIsSoterEnrolledInDevice(object) { return wx.checkIsSoterEnrolledInDevice(object) }
  static getWeRunData(object) { return wx.getWeRunData(object) }
  static reportMonitor(name, value) {
    var js_code = getApp().onekit.jscode;
    wx.httpRequest({
      url: "http://192.168.0.106:8080/onekit-adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res)
      }

    });
  };
  ////////// Router //////////////
  static navigateBack(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        if (object.success) {
          object["success"](result);
        }
        if (object.complete) {
          object["complete"](result);
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return wx.navigateBack(object2);
  }
  static switchTab(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.switchTab(object2);
  }
  static navigateTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.navigateTo(object2);
  }
  static reLaunch(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.reLaunch(object2);
  }
  static redirectTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return wx.redirectTo(object2);
  }
  ///////////// Share /////////////
  static updateShareMenu(object) { return wx.updateShareMenu(object) }
  static showShareMenu(object) {
    wx.navigateTo({
      url: "/my/page/share/share"
    });
  };
  static hideShareMenu(object) { return wx.hideShareMenu(object) }
  static getShareInfo(object) { return wx.getShareInfo(object) }
  /////////////// Storage //////////////
  static getStorageInfoSync(object) { return wx.getStorageInfoSync(object) }
  static getStorageInfo(object) { return wx.getStorageInfo(object) }
  static clearStorageSync(object) { wx.clearStorageSync(object); return {}; }
  static clearStorage(object) { return wx.clearStorage(object) }
  static removeStorageSync(object) { wx.removeStorageSync(object.key); return {}; }
  static removeStorage(object) { return wx.removeStorage(object) }
  static setStorageSync(object) { wx.setStorageSync(object.key, object.data); return {}; }
  static setStorage(object) { return wx.setStorage(object) }
  static getStorageSync(object) { return { data: wx.getStorageSync(object.key) }; }
  static getStorage(object) { return wx.getStorage(object) }
  ////////////// UI ////////////////
  static showActionSheet(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "items":
            object2["itemList"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = { tapIndex: res.index };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
    }
    return wx.showActionSheet(object2);
  }
  // static redirectTo(object) { return wx.redirectTo(object) }
  // static redirectTo(object) { return wx.redirectTo(object) }
  static hideLoading(object) { return wx.hideLoading(object) }
  static showLoading(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
      }
      //
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "content":
            object2["title"] = object[key];
            break;
          case "type":
            object2["icon"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return wx.showLoading(object2)
  }
  static SDKVersion(string) { return consloe.log("不支持此功能") }
  static hideToast(object) { return wx.hideToast(object) }
  static showToast(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
        object2 = {};
        for (var key in object) {
          switch (key) {
            case "content":
              object2["title"] = object[key];
              break;
            case "type":
              object2["icon"] = object[key];
              break;
            default:
              object2[key] = object[key];
              break;
          }
        }
      }
    }
    return wx.showToast(object2);
  }
  static confirm(object2) {
    if (object2 == null) {
      return wx.showModal();
    }
    if (object2.showCancel == null || object2.showCancel) {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          case "cancelButtonText":
            object["cancelText"] = object2[key];
            break;
          case "confirmButtonText":
            object["confirmText"] = object2[key];
            break;
          default:
            object[key] = object2[key];
            break;
        }
      }
      return wx.showModal(object);
    } else {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          default:
            object[key] = object2[key];
            break;
        }
      }
      return wx.showModal(object);
    }
  }
  static alert(object) { return wx.showModal(object); }
  static setNavigationBarColor(object) { return wx.setNavigationBarColor(object) }
  static hideNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return wx.hideNavigationBarLoading(object2)
  }
  static showNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return wx.showNavigationBarLoading(object2)
  }
  static setBackgroundTextStyle(object) { return wx.setBackgroundTextStyle(object) }

  static setBackgroundColor(object) { return wx.setBackgroundColor(object) }
  static setTabBarItem(object) { return wx.setTabBarItem(object) }
  static setTabBarStyle(object) { return wx.setTabBarStyle(object) }
  static hideTabBar(object) { return wx.hideTabBar(object) }
  static showTabBar(object) { return wx.showTabBar(object) }
  static hideTabBarRedDot(object) { return wx.hideTabBarRedDot(object) }
  static showTabBarRedDot(object) { return wx.showTabBarRedDot(object) }
  static removeTabBarBadge(object) { return wx.removeTabBarBadge(object) }
  static setTabBarBadge(object) { return wx.setTabBarBadge(object) }

  static loadFontFace(object) { return wx.loadFontFace(object) }

  static stopPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return wx.stopPullDownRefresh(object2)
  }
  static startPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function (res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return wx.startPullDownRefresh(object2)
  }
  static pageScrollTo(object) { return wx.pageScrollTo(object) }
  static setTopBarText(object) { return wx.setTopBarText(object) }
  static nextTick(object) { return wx.nextTick(object) }
  static getMenuButtonBoundingClientRect(object) { return wx.getMenuButtonBoundingClientRect(object) }
  static offWindowResize(object) { return wx.offWindowResize(object) }
  static onWindowResize(object) { return wx.onWindowResize(object) }
  ////////////// Worker ///////////////
  static createWorker(object) { return wx.createWorker(object) }
  ////////////// WXML ///////////////
  static createSelectorQuery(object) { return wx.createSelectorQuery(object) }
  static createIntersectionObserver(object) { return wx.createIntersectionObserver(object) }
  /////////////////////////////////////
  static hideKeyboard(object) { return wx.hideKeyboard(object) }
  ///////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}