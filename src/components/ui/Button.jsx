import { Link } from 'react-router-dom';

function getButtonClassName(variant, className = '') {
  return `button button--${variant} ${className}`.trim();
}

export function Button({ variant = 'primary', className, type = 'button', ...props }) {
  return (
    <button className={getButtonClassName(variant, className)} type={type} {...props} />
  );
}

export function ButtonLink({ variant = 'primary', className, ...props }) {
  return <Link className={getButtonClassName(variant, className)} {...props} />;
}
