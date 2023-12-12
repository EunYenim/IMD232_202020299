const video = document.getElementById('video');

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models'),
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
}

video.addEventListener('play', () => {
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    if (detections.length > 0) {
      const face = detections[0];
      const expressions = face.expressions;

      // 가장 높은 확률을 가진 표정 찾기
      window.maxExpression = '';
      let maxProbability = 0;
      Object.entries(expressions).forEach(([emotion, probability]) => {
        if (probability > maxProbability) {
          maxProbability = probability;
          window.maxExpression = emotion;
        }
      });

      // console.log(
      //   'Detected Expression:',
      //   maxExpression,
      //   'Probability:',
      //   maxProbability
      // );
      // 가장 큰 확률을 가진 표정의 이름과 해당 확률을 콘솔에 출력
    } else {
      // console.log('No face detected');
    }
  }, 100);
});
