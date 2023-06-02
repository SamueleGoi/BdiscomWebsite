export interface IItemMenu {
  key: string;
  label: string | JSX.Element;
  onClick: () => void;
  className: string;
}
