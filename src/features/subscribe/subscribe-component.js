import PropTypes from 'prop-types';
import React from 'react';

const noop = () => {};

function SubscribeComponent({
  disabled,
  email,
  onEmailBlur = noop,
  onEmailChange = noop,
  onEmailFocus = noop,
  onSubmit = noop,
  t,
  ...props
}) {
  return (
    <div className="subscribe--container">
      <input
        aria-label={t('subscribe.email')}
        className="subscribe--email-input"
        onBlur={onEmailBlur}
        onChange={onEmailChange}
        onFocus={onEmailFocus}
        placeholder={t('subscribe.email')}
        value={email}
        {...props}
      />
      <button
        className="subscribe--button"
        disabled={disabled}
        onClick={onSubmit}
        type="button"
      >
        {t('common.subscribe')}
      </button>
    </div>
  );
}

SubscribeComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  onEmailBlur: PropTypes.func,
  onEmailChange: PropTypes.func,
  onEmailFocus: PropTypes.func,
  onSubmit: PropTypes.func,
};

export { SubscribeComponent };
