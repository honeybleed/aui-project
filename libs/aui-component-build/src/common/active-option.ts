export interface ActiveOption {
  isActive: boolean;
  speed?: number;
  color?: string;
}
export const defaultActiveOption: ActiveOption = {
  isActive: true,
  speed: 200,
  color: 'rgba(0,0,0,.3)'
};
