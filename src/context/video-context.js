import { createContext, useContext, useReducer } from "react";
import data from '../api/data'


const VideoContext = createContext()

export const useVideo = () => useContext(VideoContext)

const likedVideos = []
const subscriptions = []
// const playlists = []

const playlists = [
    {
        id: "122334",
        name: "songs",
        list: [
            {
                id: "hdI2bqOjy3c",
                name:
                    "JavaScript Crash Course For Beginners",
                uploadedBy: " Traversy Media",
                thumbnail: "https://i.ytimg.com/vi_webp/hdI2bqOjy3c/mqdefault.webp",
                avatarSrc:
                    "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s48-c-k-c0x00ffffff-no-rj",
            },

        ]
    },
    {
        id: "45267",
        name: "cooking",
        list: [
            {
                id: "XBj_le81sAc",
                name:
                    "Introduction To PHP | Procedural PHP Tutorial For Beginners | PHP Tutorial | mmtuts",
                uploadedBy: " Dani Krossing",
                thumbnail: "https://i.ytimg.com/vi/XBj_le81sAc/mqdefault.jpg",
                avatarSrc:
                    "https://yt3.ggpht.com/ytc/AAUvwnhnGW-L982DVkS9_1rpwPYq_X8xZ-_lMbs2hUE8pw=s48-c-k-c0x00ffffff-no-rj"
            },

        ]
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
    // console.log(state, action)
    console.log(state.playlists)
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
        case "ADD_TO_SUBSCRIBE":
            return {
                ...state,
                subscriptions: state.subscriptions.concat(action.payload)
            }
        case "REMOVE_SUBSCRIPTION":
            return {
                ...state,
                subscriptions: state.subscriptions.filter((sub) => sub !== action.payload)
            }
        case "CREATE_PLAYLIST":
            return {
                ...state,
                playlists: state.playlists.concat(action.payload)
            }
        case "ADD_TO_PLAYLIST":
            console.log(action.payload)
            const found = playlists.find((playlist) => playlist.list.id === action.payload.id)
            console.log(found)
            if (!found) {
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
            }
            return state
        default:
            return state
    }

}
