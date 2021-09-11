import { Dispatch } from 'redux'
import { ALERT, IAlertType } from '../types/alertType'
import * as CateType from '../types/categoryTypes'

import { postAPI, getAPI, patchAPI, deleteAPI } from '../../utils/Axios'
import { ICategory } from '../../utils/TypeScript'


export const createCategory = (name: string, token: string) => async (dispatch: Dispatch<IAlertType | CateType.ICategoryType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })


    const res = await postAPI('category', { name }, token)

    console.log(res)
    dispatch({type: CateType.CREATE_CATEGORY, payload: res.data.saveCategory})
    dispatch({ type: ALERT, payload: { success: "Category Created Successfully!"} })
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const getCategory = () => async (dispatch: Dispatch<IAlertType | CateType.ICategoryType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })


    const res = await getAPI('category' )

    console.log(res)
    dispatch({type: CateType.GET_CATEGORIES, payload: res.data.categories})
    // dispatch({ type: ALERT, payload: { success: "Category Created Successfully!"} })
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}

export const updateCategory = (data: ICategory, token: string) => async (dispatch: Dispatch<IAlertType | CateType.ICategoryType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    dispatch({
      type: CateType.UPDATE_CATEGORY,
      payload: data
    })

    await patchAPI(`category/${data._id}`, { name: data.name }, token)
    dispatch({ type: ALERT, payload: { success: "Category Updated Successfully!!" } })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}

export const deleteCategory = (id: string, token: string) => async (dispatch: Dispatch<IAlertType | CateType.ICategoryType>) => {
  try {
    
    dispatch({ type: ALERT, payload: { loading: true } })
    dispatch({
      type: CateType.DELETE_CATEGORY,
      payload: id
    })

    await deleteAPI(`category/${id}`, token)
    dispatch({ type: ALERT, payload: { success: "Category Deleted Successfully!!" } })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}