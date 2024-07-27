import React, {useCallback, useEffect, useRef, useState} from 'react';
import * as tf from '@tensorflow/tfjs-core';
import {Human} from '@vladmandic/human';
import Header from './Header'
import Footer from './Footer';


/*
REFERENCE FROM
vladmandic's documentation
URL: https://www.npmjs.com/package/@vladmandic/human
*/

// Configuration for the Human library.
const humanConfig = {
    modelBasePath: 'https://cdn.jsdelivr.net/npm/@vladmandic/human/models/',
    face: {enabled: true},
    body: {enabled: false},
    hand: {enabled: false},
    object: {enabled: false},
};

const human = new Human(humanConfig);

// HumanComponent uses the Human library to detect faces in a video stream.
function HumanDetector() {
    // References to the video and canvas HTML elements.
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    // State to track the readiness of the Human model for detection.
    const [modelReady, setModelReady] = useState(false);

    // Function to start the detection loop.
    const detect = useCallback(async () => {
        // Continue the loop only if the video and canvas refs are set and the model is ready.
        if (videoRef.current && canvasRef.current && modelReady) {
            try {
                // Perform face detection on the video element.
                const result = await human.detect(videoRef.current);
                const interpolated = human.next(result);

                // Draw the video and the detected faces on the canvas.
                human.draw.canvas(videoRef.current, canvasRef.current);
                await human.draw.all(canvasRef.current, interpolated);
            } catch (error) {
                console.error('Detection failed:', error);
            }
        }
        // Request the next animation frame to continue the loop.
        requestAnimationFrame(detect);
    }, [modelReady]);

    // Function to load the model and start the video stream.
    async function loadAndStart() {
        await tf.ready(); // Ensure TensorFlow.js is ready.
        await human.load(); // Load the Human model.
        setModelReady(true);

        // Start video stream from the user's camera.
        const videoElement = videoRef.current;
        if (videoElement) {
            try {
                videoElement.srcObject = await navigator.mediaDevices.getUserMedia({video: true});
                await videoElement.play();
            } catch (error) {
                console.error('Error starting video stream:', error);
            }
        }
    }

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleLoadedMetadata = () => {
            canvasRef.current.width = videoElement.videoWidth;
            canvasRef.current.height = videoElement.videoHeight;
            detect();
        };

        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        loadAndStart();

        return () => {
            if (videoElement && videoElement.srcObject) {
                const tracks = videoElement.srcObject.getTracks();
                tracks.forEach(track => track.stop());
                videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [modelReady, detect]);
    // Render videoRef and actual AI detected canvas
    // HIDE THE ACTUAL VIDEOO
    return (
        <div className=''>
            <Header></Header>
            <video className='h-0' ref={videoRef} autoPlay muted/>
            <canvas className='w-full h-1/4' ref={canvasRef} />
            <Footer></Footer>
        </div>
    );
}

export default HumanDetector;