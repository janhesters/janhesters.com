import slugify from 'slugify';

const createPostMetaData = ({
  title,
  date = '1970-01-01',
  description = '',
  id,
  slug = slugify(title, { lower: true, remove: /[*+~.,()'"!?:@]/g }),
  related = [],
  tags = [],
  type = 'regular',
} = {}) => ({
  date,
  description,
  id,
  slug,
  title,
  related,
  tags,
  type,
});

const createRelatedPostMetaData = ({
  id,
  title,
  slug = slugify(title, { lower: true, remove: /[*+~.,()'"!?:@]/g }),
  date,
} = {}) => ({
  id,
  title,
  slug,
  date,
});

export { createPostMetaData, createRelatedPostMetaData };
