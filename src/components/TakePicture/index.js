import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

const TakePicture = () => {
  const [hasPermission, setHasPermission] = useState(null)
  let camera;
  useEffect(() => {
    ; (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync();
    const source = photo.uri;
    if (source) {
      handleSave(source);
    }
  }
  const handleSave = async (photo) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted'){
      const assert = await MediaLibrary.createAssetAsync(photo);
      // await MediaLibrary.createAlbumAsync("Ecofiltro", assert);
    } else {
      console.log('No tienes permiso');
    }
  }
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={(r) => {
          camera = r
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: '5%',
              right: '5%'
            }}
          >
            <TouchableOpacity onPress={() => Actions.Evaluate(false)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between'
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={__takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff'
                }}
              />
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
}


export default TakePicture;