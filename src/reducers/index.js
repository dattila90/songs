import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { id: 1, title: "No scrubs", duration: '3:45' },
        { id: 2, title: "All star", duration: '2:54' },
        { id: 3, title: "Touched", duration: '3:23' },
        { id: 4, title: "Getting home", duration: '3:11'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});