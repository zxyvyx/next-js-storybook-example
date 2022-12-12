import { PropTypes } from 'prop-types';

export default function Button({
  navigationType = '',
  btnStyle = 'primary',
  btnType = 'button',
  isSelected = false,
  isDisabled = false,
  onClick = () => {},
  // internalLink = '',
  externalLink = '',
  children,
}) {
  let style = 'py-2 px-4 rounded';

  /**
   * Button styles
   * font type can't included here because on several usage will using different font type
   */
  switch (btnStyle) {
    case 'primary':
      if (isSelected) {
        style = `${style} bg-[#E9F2FF] hover:bg-[#E9F2FF] active:bg-[#E9F2FF] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#0C66E4]`;
      } else {
        style = `${style} bg-[#0C66E4] hover:bg-[#0055CC] active:bg-[#09326C] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-white`;
      }
      break;
    case 'warning':
      if (isSelected) {
        style = `${style} bg-[#E9F2FF] hover:bg-[#E9F2FF] active:bg-[#E9F2FF] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#0C66E4]`;
      } else {
        style = `${style} bg-[#E2B203] hover:bg-[#CF9F02] active:bg-[#B38600] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#172B4D]`;
      }
      break;
    case 'danger':
      if (isSelected) {
        style = `${style} bg-[#E9F2FF] hover:bg-[#E9F2FF] active:bg-[#E9F2FF] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#0C66E4]`;
      } else {
        style = `${style} bg-[#CA3521] hover:bg-[#AE2A19] active:bg-[#601E16] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-white`;
      }
      break;
    default:
      if (isSelected) {
        style = `${style} bg-[#E9F2FF] hover:bg-[#E9F2FF] active:bg-[#E9F2FF] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#0C66E4]`;
      } else {
        style = `${style} bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#388BFF] active:outline-none disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-[#8993A5] disabled:cursor-not-allowed text-[#172B4D]`;
      }
      break;
  }

  if (navigationType === 'internal') {
    return (
      <button
        type='button'
        className={style}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children || 'Button'}
      </button>
    );
  }

  if (navigationType === 'external') {
    return (
      <a
        href={externalLink}
        className={style}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children || 'Button'}
      </a>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType || 'button'}
      className={style}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children || 'Button'}
    </button>
  );
}

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  navigationType: PropTypes.oneOf(['internal', 'external']),
  // eslint-disable-next-line react/require-default-props
  btnStyle: PropTypes.oneOf(['primary', 'warning', 'danger', 'default']),
  // eslint-disable-next-line react/require-default-props
  btnType: PropTypes.oneOf(['button', 'submit', 'reset']),
  // eslint-disable-next-line react/require-default-props
  isSelected: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  isDisabled: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  externalLink: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
