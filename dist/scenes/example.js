"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@revideo/2d/lib/jsx-runtime");
const _2d_1 = require("@revideo/2d");
const core_1 = require("@revideo/core");
exports.default = (0, _2d_1.makeScene2D)(function* (view) {
    const logoRef = (0, core_1.createRef)();
    yield view.add((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(_2d_1.Video, { src: 'https://revideo-example-assets.s3.amazonaws.com/stars.mp4', size: ['100%', '100%'], play: true }), (0, jsx_runtime_1.jsx)(_2d_1.Audio, { src: 'https://revideo-example-assets.s3.amazonaws.com/chill-beat.mp3', play: true, time: 17.0 })] }));
    yield* (0, core_1.waitFor)(1);
    view.add((0, jsx_runtime_1.jsx)(_2d_1.Img, { width: '1%', ref: logoRef, src: 'https://revideo-example-assets.s3.amazonaws.com/revideo-logo-white.png' }));
    yield* (0, core_1.chain)((0, core_1.all)(logoRef().scale(40, 2), logoRef().rotation(360, 2)), logoRef().scale(60, 1));
});
//# sourceMappingURL=example.js.map