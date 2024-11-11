export const colors = {
  primary: '#FA0B5B',
  background: "#EBEEF7",
  white: '#FFF',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  colors,
  settings: {
    border: {
      dashed: '2px dashed #ddd',
      radius: {
        small: '3px',
        medium: '6px',
        large: '9px'
      }
    },
    box: {
      default: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      input: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
      header: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
      // default: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
    },
    radius: {
      small: '3px',
      medium: '6px',
      large: '9px'
    }
  }
};