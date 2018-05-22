import axios from 'axios'

export const actionToggleLoad = toggle => {
  return {
    type: 'TOGGLE_LOAD',
    toggle: toggle
  }
}

export const actionToggleSide = toggle => {
  return {
    type: 'TOGGLE_SIDE',
    toggle: toggle
  }
}

export const actionToggleSearch = toggle => {
	toggle ? document.body.style.overflow = 'hidden' :
			document.body.style.overflow = ''
	return {
		type: 'TOGGLE_SEARCH',
		toggle: toggle
	}
}

export const loadBlogs = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BLOGS', loading: true})
		axios.get(`http://jsonplaceholder.typicode.com/posts?_start=0&_limit=4`)
			.then(res => {
				let blogs = res.data
				dispatch({type: 'LOAD_BLOGS', blogs})
				dispatch({type: 'LOADING_BLOGS', loading: false})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export const loadInfinitieBlogs = (count) => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BLOGS', loading: true})
		axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${count}&_limit=${4}`)
			.then(res => {
				let blogs = res.data
				dispatch({type: 'LOAD_INF_BLOGS', blogs})
				dispatch({type: 'LOADING_BLOGS', loading: false})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export const getBlog = id => {
	return dispatch => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				let blog = res.data
				dispatch({type: 'VIEW_BLOG', blog})
			}).catch((err) => console.log(err))
	}
}