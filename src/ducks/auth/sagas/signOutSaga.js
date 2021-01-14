// import { call, put } from 'redux-saga/effects'
// import firebase from 'firebase'
// import { SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS } from '../const'

// export default function* signOutSaga() {
//     const auth = firebase.auth()
//     try {
//         yield call([auth, auth.signOut])
//         yield put({
//             type: SIGN_OUT_SUCCESS
//         })
//         console.log('I`m unauthorized!!!')
//     } catch (error) {
//         console.log(error)
//     }
// }
