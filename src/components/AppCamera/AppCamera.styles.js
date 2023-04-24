import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',

    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
  },

  camera: {
    width: '100%',
    height: '100%',
  },

  cameraAccessContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  cameraAccessText: {
    textAlign: 'center',
  },
  cameraAccessButton: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,

    paddingVertical: 8,
    paddingHorizontal: 16,

    backgroundColor: '#8ABF40',
    borderRadius: 8,
  },
  cameraAccessButtonText: {
    color: '#ffffff',
  },

  cameraButtonsContainer: {
    position: 'relative',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cameraToggleButton: {
    position: 'absolute',
    left: 10,
    top: 10,

    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
  },
  cameraSnapButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
  },
});
