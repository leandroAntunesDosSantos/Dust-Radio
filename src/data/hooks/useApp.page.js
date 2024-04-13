import { useState} from "react";


const musicList = [
    {
        id:1,
        title: 'Nero Forte',
        artist: 'Slipknot',
        time: 165,
        url:'musics/01.mp3',
    },
    {
        id:2,
        title: 'Unsainted',
        artist: 'Slipknot',
        time: 136,
        url: 'musics/02.mp3',
    },

]



export function useApp(){
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music){
        setSelectedMusic(music);
        setTime(0);
    }

    return {
        selectMusic,
        time,
        setTime,
        selectedMusic,
        musicList,
    }
}
