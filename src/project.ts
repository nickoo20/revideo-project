import {makeProject} from '@revideo/core';

import example1 from './scenes/example1?scene';
import example2 from './scenes/example2?scene';
import example3 from './scenes/example3?scene';

export default makeProject({
  scenes: [
    example1,
    example2,
    example3,
  ],
});
