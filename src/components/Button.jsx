import { useCallback } from '@lynx-js/react';

const solidClasses = {
  default: 'bg-gray-500  hover:bg-gray-600 active:bg-gray-700',
  primary: 'bg-blue-500  hover:bg-blue-600 active:bg-blue-700',
  secondary: 'bg-purple-500  hover:bg-purple-600 active:bg-purple-700',
  success: 'bg-green-500  hover:bg-green-600 active:bg-green-700',
  warning: 'bg-yellow-500  hover:bg-yellow-600 active:bg-yellow-700',
  danger: 'bg-red-500  hover:bg-red-600 active:bg-red-700',
};

const borderedClasses = {
  default: 'border border-gray-500 hover:bg-gray-50 active:bg-gray-100',
  primary: 'border border-blue-500 hover:bg-blue-50 active:bg-blue-100',
  secondary: 'border border-purple-500 hover:bg-purple-50 active:bg-purple-100',
  success: 'border border-green-500 hover:bg-green-50 active:bg-green-100',
  warning: 'border border-yellow-500 hover:bg-yellow-50 active:bg-yellow-100',
  danger: 'border border-red-500 hover:bg-red-50 active:bg-red-100',
};

const textClasses = {
  default: 'text-gray-500',
  primary: 'text-blue-500',
  secondary: 'text-purple-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
};

const flatClasses = {
  default: 'text-gray-500 hover:bg-gray-50 active:bg-gray-100',
  primary: 'text-blue-500 hover:bg-blue-50 active:bg-blue-100',
  secondary: 'text-purple-500 hover:bg-purple-50 active:bg-purple-100',
  success: 'text-green-500 hover:bg-green-50 active:bg-green-100',
  warning: 'text-yellow-500 hover:bg-yellow-50 active:bg-yellow-100',
  danger: 'text-red-500 hover:bg-red-50 active:bg-red-100',
};

const Button = ({
  children,
  onPress,
  isDisabled = false,
  isLoading = false,
  startContent,
  endContent,
  isIconOnly = false,
  variant = 'solid',
  color = 'default',
  disableEffect = true,
  className: classes,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!isDisabled && !isLoading && onPress) {
      onPress();
    }
  }, [isDisabled, isLoading, onPress]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  const tabIndex = isDisabled || isLoading ? -1 : 0;

  const baseClasses =
    'inline-flex items-center justify-center rounded transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

  const paddingClasses = isIconOnly ? 'p-2' : 'px-4 py-2';

  const stateClasses =
    disableEffect && (isDisabled || isLoading)
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';
  const textClass = variant === 'solid' ? 'text-white' : textClasses[color];

  let variantClasses;
  switch (variant) {
    case 'solid':
      variantClasses = solidClasses[color] || solidClasses.default;
      break;
    case 'bordered':
      variantClasses = borderedClasses[color] || borderedClasses.default;
      break;
    case 'flat':
      variantClasses = flatClasses[color] || flatClasses.default;
      break;
    default:
      variantClasses = solidClasses.default;
  }

  const className = `${baseClasses} ${paddingClasses} ${stateClasses} ${variantClasses} ${classes}`;

  return (
    <view
      className={className}
      bindtap={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      role="button"
      {...props}
    >
      <view className="flex items-center space-x-2">
        {isLoading ? (
          <text className={`m-0 ${textClass}`}>Loading...</text>
        ) : (
          <>
            {startContent && (
              <text className={`m-0 ${textClass}`}>{startContent}</text>
            )}
            <text className={`m-0 ${textClass}`}>{children}</text>
            {endContent && (
              <text className={`m-0 ${textClass}`}>{endContent}</text>
            )}
          </>
        )}
      </view>
    </view>
  );
};

export default Button;
