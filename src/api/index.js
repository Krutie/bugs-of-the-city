import fire from '@/store/fire'
const db = fire.database()

export const fetchResources = () => {
  return db.ref('pages').once('value')
}

export const storePage = (payload) => {
  return db.ref('pages').push({
    name: payload.name,
    layout: payload.layout
  })
}

export const removePage = (payload) => {
  return db.ref('pages').child(payload).remove()
}

export const addGridItem = (payload) => {
  // return db.ref('pages').child(payload.firebaseKey).child('layout').push(payload.layout)
  console.log(db.ref('pages').child(payload.firebaseKey).child('layout'))
  return db.ref('pages').child(payload.firebaseKey).child('layout').push(payload.layout)
}
// export const storeTextbox = (payload) => {
//   return db.ref('components').push(payload)
// }

// export const storeTextarea = (payload) => {
//   return db.ref('components').push(payload)
// }

// export const storeImageLocation = (payload) => {
//   return db.ref('components').push(payload)
// }

// export const removeResource = (payload) => {
//   console.log('removeResource api payload')
//   console.log(payload)
//   return db.ref('components').child(payload).remove()
// }

// Update Grid Properties
// export const updateFirebaseResource = (payload) => {
//   const ref = db.ref('components').child(payload.index)
//   return ref.update(payload.component)
// }

// saveTitle
// export const saveTitle = (payload) => {
  // return db.ref('components').child(payload.key).update({
  //   title: payload.title
  // })
// }

// save headings
// export const saveHeadings = (payload) => {
  // return db.ref('components').child(payload.key).update({
  //   h1: payload.h1,
  //   h2: payload.h2
  // })
// }

// saveContent
// export const saveContent = (payload) => {
  // return db.ref('components').child(payload.key).update({
  //   content: payload.content
  // })
// }

// saveLocation
// export const saveLocation = (payload) => {
//   return db.ref('components').child(payload.key).update({
//     location: payload.location
//   })
// }
