import { makeScene2D, Rect, Txt } from "@revideo/2d";
import { createRef, easeInOutCubic, map, tween, all, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
    const rectRef = createRef<Rect>();
    const textRef = createRef<Txt>();

    view.add(
        <>
            <Rect
                ref={rectRef}
                width={400}
                height={100}
                fill={'#333333'}>
            </Rect>
                <Txt
                    fontSize={24} // Adjusted font size
                    textWrap={true}
                    ref={textRef}
                    fill={'white'}
                    position={[0, 0]} // Centered text within the rectangle
                    fontFamily={'Roboto'}
                    >
                    THANK YOU. I HOPE YOU LIKE IT.....
                </Txt>
        </>
    );
    yield* waitFor(2);

    // Scale the rectangle and text
    yield* all(
        rectRef().scale(30, 2),
        // textRef().scale(2, 2) // Scaling the text along with the rectangle
    );

    // Slide from left to right
    yield* all(
        rectRef().position.x(map(-300, 300, easeInOutCubic(0)), 0),
        tween(2, value => {
            rectRef().position.x(map(-300, 300, easeInOutCubic(value)));
        })
    );
});
