export interface IAbsolutePosition {
  verticalDirection: verticalDirection,
  horizontalDirection: horizontalDirection,
  verticalDistance: number,
  horizontalDistance: number,
}

export enum verticalDirection {
  top = "top",
  bottom = "bottom"
}

export enum horizontalDirection {
  left = "left",
  right = "right"
}