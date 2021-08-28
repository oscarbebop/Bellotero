import { colors } from 'design-system/colors';

export default function LeftArrow() {
  return (
    <svg
      width={18}
      height={11}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M.206 5.803L5.179 10.5c.134.121.313.188.498.186a.732.732 0 00.494-.195.649.649 0 00.209-.464.647.647 0 00-.196-.47l-3.739-3.53h13.848a.75.75 0 00.53-.18.67.67 0 00.165-.222.633.633 0 000-.53.67.67 0 00-.166-.22.75.75 0 00-.53-.18L2.391 4.694 6.18 1.167A.673.673 0 006.352.95a.636.636 0 00-.14-.753.749.749 0 00-.8-.135.708.708 0 00-.23.16L.208 4.857a.634.634 0 000 .945H.206z"
          fill={colors.white}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill={colors.white} d="M0 0h18v11H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
