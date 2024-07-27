import { Img, Txt, makeScene2D } from '@revideo/2d';
import { all, useScene, createRef, waitFor, easeInCubic, easeInOutBack, tween,  slideTransition, Direction } from '@revideo/core';

export default makeScene2D(function* (view) {
  const rocketRef = createRef<Img>();
  const earthRef = createRef<Img>();
  const txtRef = createRef<Txt>();
  const additionalTxtRef = createRef<Txt>();

  const sceneSize = useScene().getSize();

  yield view.add(
    <>
      <Img
        width={'20%'}
        ref={earthRef}
        src={'/earth.png'}
        position={[-sceneSize.width / 2 + 50, sceneSize.height / 2 - 50]}
      />,
      <Img
        width={'5%'}
        ref={rocketRef}
        src={'/rocket.png'}
        position={[earthRef().position().x + 150, earthRef().position().y - 150]}
      />
    </>
  );

  // Rocket animation with tween
  yield* rocketRef().position([1000, -600], 2, easeInCubic);
  yield* rocketRef().position([sceneSize.width / 2 - 50, -sceneSize.height / 2 + 50], 2, easeInOutBack);

  yield view.add(
    <Txt
      fontFamily={"Montserrat"}
      fill="white"
      ref={txtRef}
      textAlign={"center"}
      fontSize={60}
      position={[0, 0]}
    />
  );

  // Scale and position animation for the text
  yield* all(
    txtRef().text("Hello! My name is Niyati.", 2),
    txtRef().scale(1.5, 2, easeInOutBack),
    txtRef().position.y(-50, 2, easeInOutBack)
  );

  yield view.add(
    <Txt
      fontFamily={"Roboto"}
      fill="white"
      ref={additionalTxtRef}
      textAlign={"center"}
      fontSize={40}
      position={[0, 80]}
    />
  );

  // Flicker effect and color change for the additional text
  yield* all(
    additionalTxtRef().text("Passionate about creating innovative and efficient web applications.", 3),
    additionalTxtRef().fill("#ff6347", 1), // Change color to tomato
    additionalTxtRef().opacity(1, 1), // Ensure it is fully visible before applying the flicker
  );

  yield* waitFor(2); // Wait for 2 seconds before starting the fade-out

  yield* all(
    txtRef().opacity(0, 2), // Fade out text over 2 seconds
    additionalTxtRef().opacity(0, 2) // Fade out additional text over 2 seconds
  );
});
