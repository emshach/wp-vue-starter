var Path = wp.api.models.Post.extend({
  urlRoot: wpApiSettings.root + '/path'
});

var Paths = wp.api.collections.Posts.extend({
  url: wpApiSettings.root + '/path',
  model: Path
});

export default { Path, Paths };
