import { BLOGS_LIST_FAIL, BLOGS_LIST_REQUEST, BLOGS_LIST_SUCCESS, BLOG_CREATE_FAIL, BLOG_CREATE_REQUEST, BLOG_CREATE_RESET, BLOG_CREATE_SUCCESS, BLOG_DELETE_FAIL, BLOG_DELETE_REQUEST, BLOG_DELETE_SUCCESS, BLOG_DETAILS_FAIL, BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_UPDATE_FAIL, BLOG_UPDATE_REQUEST, BLOG_UPDATE_RESET, BLOG_UPDATE_SUCCESS } from "../constants/blogConstants";



export const blogListReducer = ( state = { blogs: [] }, action ) => {

    switch (action.type) {
        case BLOGS_LIST_REQUEST:
            return { loading: true, blogs: [] }
        
        case BLOGS_LIST_SUCCESS:
            return { loading: false, 
                blogs: action.payload.blogs,
            }

        case BLOGS_LIST_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state; 
    }

}



export const blogDetailsReducer = ( state = { blog: { comments: [] } }, action ) => {

    switch (action.type) {
        case BLOG_DETAILS_REQUEST:
            return { loading: true, ...state }
        
        case BLOG_DETAILS_SUCCESS:
            return { loading: false, 
                blog: action.payload
            }

        case BLOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }
    
        default:
            return state; 
    }

}



export const blogCreateReducer = ( state = {}, action ) => {

    switch (action.type) {
        case BLOG_CREATE_REQUEST:
            return { loading: true }
        case BLOG_CREATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload }
        case BLOG_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case BLOG_CREATE_RESET:
            return { state: {} }
        default:
            return state; 
    }

}



export const blogUpdateReducer = ( state = { blog: {} }, action ) => {

    switch (action.type) {
        case BLOG_UPDATE_REQUEST:
            return { loading: true }
        case BLOG_UPDATE_SUCCESS:
            return { loading: false, success: true, blog: action.payload }
        case BLOG_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case BLOG_UPDATE_RESET:
            return { blog: {} }
        default:
            return state; 
    }

}


export const blogDeleteReducer = ( state = {}, action ) => {

    switch (action.type) {
        case BLOG_DELETE_REQUEST:
            return { loading: true }
        case BLOG_DELETE_SUCCESS:
            return { loading: false, success: true }
        case BLOG_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state; 
    }

}
