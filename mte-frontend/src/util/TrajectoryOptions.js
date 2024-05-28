// Константы PathOptions для траекторий

export const EDIT_TRAJECTORY_TRACK_OPTIONS = {
    color: "grey",
    dashArray: '10, 10',
    dashOffset: '0'
};
export const EDIT_TRAJECTORY_HINT_OPTIONS = {
    color: "lightGray"
}

export const DEFAULT_TRAJECTORY_OPTIONS = {
    color: "blue",
    weight: 2
};
export const HIGHLIGHTED_TRAJECTORY_OPTIONS = {...DEFAULT_TRAJECTORY_OPTIONS, color: "red"};
export const ONFOCUS_TRAJECTORY_WEIGHT = 4; // ширина траектории при ее фокусе;