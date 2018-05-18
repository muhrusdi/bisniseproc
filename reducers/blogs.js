const initialState = {
	blogs: [],
	blog: {},
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_BLOGS':
			return {
				...state,
				blogs: action.blogs
			}
		case 'LOAD_INF_BLOGS':
			return {
				...state,
				blogs: [...state.blogs, ...action.blogs]
			}
		case 'LOADING_BLOGS':
			return {
				...state,
				loading: action.loading
			}
		case 'VIEW_BLOG':
			return {
				...state,
				blog: action.blog
			}
		default:
			return state
	}
}