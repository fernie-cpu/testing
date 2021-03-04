const capitalize = require('./capitalize');

it('Capitalize Stuff Work', () => {
  expect(capitalize('the odin project')).toBe('The odin project');
});
