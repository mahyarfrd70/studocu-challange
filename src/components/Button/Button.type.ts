export interface ButtonProps {
  // based on daisyUI button type classes, for example : btn-success
  // https://daisyui.com/components/button
  buttonTypeClass?:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-info'
    | 'btn-success'
    | 'btn-warning'
    | 'btn-error'
    | 'btn-ghost'
    | 'btn-link';
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  dataTestId?: string;
}
