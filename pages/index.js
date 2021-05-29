import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

const HomePage = () => {

  const function1 = async () => {
    console.log('adding to firebase')
    await firebase.firestore().collection('test').add({
      test: 'testing'
    })
  }


  return (
    <div onClick={function1} >
      Home
    </div>
  )
}

export default HomePage
