import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "No scrubs", duration: '3:45' },
        { title: "All star", duration: '2:54' },
        { title: "Touched", duration: '3:23' },
        { title: "Getting home", duration: '3:11'}
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