export const CLASS_A = {
  default: {
    from: [0, 0, 0, 0],
    to: [127, 255, 255, 255],
    mask: 8,
  },
  private: {
    from: [10, 0, 0, 0],
    to: [10, 255, 255, 255],
  }
}

export const CLASS_B = {
  default: {
    from: [128, 0, 0, 0],
    to: [191, 255, 255, 255],
    mask: 16,
  },
  private: {
    from: [172, 16, 0, 0],
    to: [172, 31, 255, 255],
  }
}

export const CLASS_C = {
  default: {
    from: [192, 0, 0, 0],
    to: [223, 255, 255, 255],
    mask: 24,
  },
  private: {
    from: [192, 168, 0, 0],
    to: [192, 168, 255, 255],
  }
}

export const CLASS_D = {
  default: {
    from: [224, 0, 0, 0],
    to: [239, 255, 255, 255],
    mask: null,
  },
  private: {
    from: null,
    to: null,
  }
}

export const CLASS_E = {
  default: {
    from: [240, 0, 0, 0],
    to: [255, 255, 255, 255],
    mask: null,
  },
  private: {
    from: null,
    to: null,
  }
}