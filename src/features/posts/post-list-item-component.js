import Link from 'next/link.js';
import PropTypes from 'prop-types';
import React from 'react';

const PostListItemComponent = ({ date, description, slug, t, title }) => (
  <li className="post-list-item">
    <h2 className="post-list-item--title">
      <Link href="/[postSlug]" as={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </h2>
    <div className="post-list-item--date">{date}</div>
    <p className="post-list-item--description">
      {description}
      <Link href="/[postSlug]" as={`/${slug}`}>
        <a className="post-list-item--read-more-button">{t('common.more')}</a>
      </Link>
    </p>
  </li>
);

PostListItemComponent.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export { PostListItemComponent };
