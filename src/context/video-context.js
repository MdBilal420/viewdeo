import { createContext, useContext, useReducer } from "react";
import data from '../api/data'


const VideoContext = createContext()

export const useVideo = () => useContext(VideoContext)

const likedVideos = []
const subscriptions = []
const playlists = [
    {
        id: Math.random() * 1000,
        name: "Watch Later",
        list: []
    },
]


export const VideoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, { likedVideos, data, subscriptions, playlists })

    return <VideoContext.Provider value={{
        data,
        likedVideos: state.likedVideos,
        subscriptions: state.subscriptions,
        playlists: state.playlists,
        dispatch
    }}>
        {children}
    </VideoContext.Provider>
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIKE":
            const present = state.likedVideos.find((item) => item.id === action.payload.id)
            if (!present) {
                return {
                    ...state,
                    likedVideos: state.likedVideos.concat(action.payload)
                }
            }
            return { ...state, likedVideos }
        case "ADD_TO_UNLIKE":
            return {
                ...state,
                likedVideos: state.likedVideos.filter((video) => video.id !== action.payload.id)
            }
        case "ADD_TO_SUBSCRIBE":
            const found = state.subscriptions.find((item) => item.id === action.payload.id)
            if (!found) {
                return {
                    ...state,
                    subscriptions: state.subscriptions.concat(action.payload)
                }
            }
            return { ...state, subscriptions }

        case "REMOVE_SUBSCRIPTION":
            return {
                ...state,
                subscriptions: state.subscriptions.filter((sub) => sub !== action.payload)
            }
        case "CREATE_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.concat({ id: action.payload.id, name: action.payload.name, list: [action.payload.video] })
            }
        case "ADD_TO_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.map(({ id, name, list }) =>
                    id === action.payload.id
                        ?
                        { id, name, list: list.concat(action.payload.video) }
                        :
                        { id, name, list }
                )
            }

        case "REMOVE_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.filter((playlist) => playlist.id !== action.payload.id)
            }

        case "REMOVE_VIDEO_FROM_PLAYLIST":
            console.log(state.playlists)
            console.log(action.payload)
            return {
                ...state,
                playlists: state.playlists.map((playlist) => playlist.id === action.payload.playlist.id
                    ?
                    { ...playlist, list: playlist.list.filter((play) => play.id !== action.payload.video.id) }
                    :
                    playlist
                )
            }

        default:
            return state
    }

}
