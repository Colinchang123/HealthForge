import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as faceapi from 'face-api.js';
import backgroundImage from './images/images.jpg'; // Ensure correct path to your image
import { useNavigate, HashRouter } from 'react-router-dom';

const MODEL_URL = process.env.PUBLIC_URL + '/models';

const FaceRecognition = () => {
  const location = useLocation();
  const doctorId = location.state?.doctorId; // Access doctorId from location state
  const [isLoading, setIsLoading] = useState(true);
  const [loaderMsg, setLoaderMsg] = useState('');
  const [recognitionError, setRecognitionError] = useState('');
  const [faceMatcher, setFaceMatcher] = useState(null);

  const navigate = useNavigate();
  const videoElement = useRef(null);
  const canvasElement = useRef(null);

  const loadModels = async () => {
    setLoaderMsg('Please wait while face authenticator is loading...');
    console.log('Loading models...');
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    console.log('SSD Mobilenetv1 model loaded.');
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    console.log('Face landmark model loaded.');
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    console.log('Face recognition model loaded.');
    console.log('Models loaded successfully.', doctorId);
  };

  const loadFaceMatcher = async () => {
    const labeledDescriptors = await loadLabeledImages();
    setFaceMatcher(new faceapi.FaceMatcher(labeledDescriptors));
    setLoaderMsg('Please allow webcam access and have your face in view of the webcam');
  };

  useEffect(() => {
    const initialize = async () => {
      await loadModels();
      await loadFaceMatcher();
      setIsLoading(false);
    };
    initialize();
    startVideo();
  }, []);

  const loadLabeledImages = async () => {
    const labels = ['doc1', 'doc2', 'doc3', 'doc4', 'doc5']; // Update with your labels
    return Promise.all(
      labels.map(async (label) => {
        console.log(`Fetching image for ${label}...`);
        const img = await faceapi.fetchImage(`${process.env.PUBLIC_URL}/face_images/${label}.jpg`);
        console.log(`Image for ${label} fetched.`);

        console.log(`Detecting face for ${label}...`);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
        if (!detections) {
          console.error(`No face detected for label ${label}`);
          throw new Error(`No face detected for label ${label}`);
        }
        console.log(`Face detected for ${label}.`);

        return new faceapi.LabeledFaceDescriptors(label, [detections.descriptor]);
      })
    );
  };

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      videoElement.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const loadRecognizedFaces = async () => {
    if (!videoElement.current || !faceMatcher) return;

    setRecognitionError('');
    console.log('Detecting faces in video frame...');

    const video = videoElement.current;
    const canvas = canvasElement.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const displaySize = { width: video.videoWidth, height: video.videoHeight };

    try {
      const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      // Clear previous drawings
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections);

      resizedDetections.forEach(async (detection) => {
        const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
        console.log('Best match:', bestMatch);

        if (bestMatch.label === doctorId && bestMatch.distance <= 0.4) {
          console.log('Successfully authenticated:', bestMatch.label);
          setLoaderMsg(`Successfully authenticated: ${bestMatch.label}`);

          const delay = setTimeout(() => {
            navigate('/Home2');
          }, 2000); // 2000 milliseconds = 2 seconds

        } else if (bestMatch.label === 'unknown' || bestMatch.distance > 0.3) {
          console.log('Unknown face detected');
          setLoaderMsg('Unknown face detected');

        } else if (bestMatch.label !== doctorId) {
          console.log('Wrong doctor');
          setLoaderMsg('Wrong doctor');
        }
      });
    } catch (error) {
      console.error('Error detecting faces:', error);
      setRecognitionError('Error detecting faces. Please try again.');
    }
  };

  return (
    <div className="FaceRecognition" style={styles.container}>
      <div className="rectangle" style={styles.rectangle}></div>
      <div className="loading-msg" style={styles.loadingMsg}>{loaderMsg}</div>
      <video ref={videoElement} autoPlay muted width="720" height="560" style={styles.video} />
      <canvas ref={canvasElement} width="720" height="560" style={styles.canvas} />
      <button onClick={loadRecognizedFaces} style={styles.button}>
        Authenticate
      </button>
      {recognitionError && <p>{recognitionError}</p>}
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  rectangle: {
    position: 'absolute',
    top: '50%', // Adjust as needed
    left: '50%', // Adjust as needed
    transform: 'translate(-50%, -50%)',
    width: '45%', // Adjust width as needed
    height: '75%', // Adjust height as needed
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White color with full opacity
    borderRadius: '15px', // Rounded corners
    zIndex: 0, // Place the rectangle behind other elements
  },
  loadingMsg: {
    color: 'grey',
    position: 'relative', // Ensure loading message stays within the container
    zIndex: 2, // Ensure the loading message is above the rectangle
    fontFamily: 'Helvetica',
  },
  video: {
    display: 'block',
    margin: '20px 100px',
    zIndex: 1,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  button: {
    margin: '10px 100px', // Adjust vertical margin
    padding: '2px 300px', // Adjust padding
    fontSize: '1rem', // Adjust font size
    backgroundColor: 'green', // Button background color
    color: 'lightgrey', // Button text color
    border: 'none', // Remove border
    cursor: 'pointer', // Pointer cursor on hover
    borderRadius: '10px', // Rounded corners
    zIndex: 3,
    fontFamily: 'Calibri',
    fontWeight: 550,
  },
};

export default FaceRecognition;
