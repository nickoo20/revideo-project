import { makeScene2D, Rect, Txt } from '@revideo/2d';
import { all, waitFor, createRef, easeInOutBack, Direction, slideTransition } from '@revideo/core';

export default makeScene2D(function* (view) {
  const rects: Rect[] = [];
  const textRefs: Txt[] = [];
  const skills = [
    "C/C++",
    "JavaScript",
    "SQL",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "WordPress",
    "Framer Motion",
    "RESTful APIs",
    "React.js",
    "Node.js",
    "Express.js",
    "Redux",
    "FastAPI",
    "MongoDB",
    "Git"
  ];

  // Add heading for skills with slide transition
  const headingRef = createRef<Txt>();
  const containerRef = createRef<Rect>();

  yield* slideTransition(Direction.Right);

  view.add(
    <Rect
      ref={containerRef}
      width={400} // Adjusted width
      height={150} // Adjusted height
      rotation={-20}
      fill={'#333333'}
    >
      <Txt
        ref={headingRef}
        fontFamily={"Montserrat"}
        fill="#ffffff"
        textAlign={"center"}
        fontSize={80}
        text="Skills"
        position={[0, 0]} // Centered heading
      />
    </Rect>
  );

  yield* all(containerRef().scale(1, 2), headingRef().scale(1.5, 2));

  // Fade out containerRef and headingRef
  yield* all(containerRef().opacity(0, 1), headingRef().opacity(0, 1));

  // Add rectangles and text
  yield* slideTransition(Direction.Left);
  skills.forEach((skill, i) => {
    const rectX = -400 + 150 * (i % 5); // Increased rectangle width
    const rectY = -150 + 150 * Math.floor(i / 5);

    const rectRef = createRef<Rect>();
    view.add(
      <Rect
        ref={rectRef}
        width={200} // Increased width
        height={70} // Increased height
        x={rectX}
        y={rectY}
        fill="#333333" // Improved color
        radius={10} // Rounded corners
        rotation={0} // Initial rotation
      />
    );
    rects.push(rectRef());

    const textRef = createRef<Txt>();
    view.add(
      <Txt
        ref={textRef}
        fontFamily={"Roboto"}
        fill="#ffffff" // Text color
        textAlign={"center"}
        fontSize={24} // Slightly larger font size
        text={skill}
        position={[rectX, rectY + 25]} // Adjust position for padding
      />
    );
    textRefs.push(textRef());
  });

  yield* waitFor(1);

  // Animate rectangles and text with padding, rotation, and improved color
  yield* all(
    ...rects.map((rect, i) =>
      all(
        rect.position.y(100, 1).to(-100, 2).to(0, 1),
        rect.rotation(360, 2, easeInOutBack), // Rotation effect
        textRefs[i].position.y(100, 1).to(-100, 2).to(0, 1),
        textRefs[i].rotation(360, 2, easeInOutBack) // Rotation effect
      )
    )
  );
});
